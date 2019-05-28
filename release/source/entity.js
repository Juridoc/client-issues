"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = void 0;
/*!
 * Copyright (C) 2018-2019 Juridoc
 */
const Class = require("@singleware/class");
const RestDB = require("@singleware/restdb");
const Profiles = require("@juridoc/client-profiles");
const Tasks = require("@juridoc/client-tasks");
const Types = require("./types");
const Internals = require("./internals");
/**
 * Issue entity class.
 */
let Entity = class Entity extends Class.Null {
    /**
     * Test whether or not the given contact is a member.
     * @param contact Contact entity.
     * @returns Returns true when the specified contact is a member, false otherwise.
     */
    testMember(contact) {
        return this.contactsIdList.includes(contact.id);
    }
    /**
     * Determines whether or not the issue is pending.
     * @param contact Optional contact entity.
     * @returns Returns true when the issue is pending, false otherwise.
     */
    isPending(contact) {
        if (contact !== void 0) {
            return (this.testMember(contact) &&
                !this.acceptedContactsIdList.includes(contact.id) &&
                !this.declinedContactsIdList.includes(contact.id));
        }
        return this.status === Types.Common.Pending || this.status === Types.Common.Countered;
    }
    /**
     * Determines whether or not the issue is accepted.
     * @param contact Optional contact entity.
     * @returns Returns true when the issue is accepted, false otherwise.
     */
    isAccepted(contact) {
        if (contact !== void 0) {
            return this.testMember(contact) && this.acceptedContactsIdList.includes(contact.id);
        }
        return this.status === Types.Common.Accepted;
    }
    /**
     * Determines whether or not the issue is declined.
     * @param contact Optional contact entity.
     * @returns Returns true when the issue is declined, false otherwise.
     */
    isDeclined(contact) {
        if (contact !== void 0) {
            return this.testMember(contact) && this.declinedContactsIdList.includes(contact.id);
        }
        return this.status === Types.Common.Declined;
    }
    /**
     * Determines whether or not the issue is resolved.
     * @returns Returns true when the issue is resolved, false otherwise.
     */
    isResolved() {
        return this.status === Types.Common.Accepted || this.status === Types.Common.Renounced;
    }
    /**
     * Determines whether or not the issue can be removed by the given profile.
     * @param profile Profile entity.
     * @returns Returns true when the issue can be removed, false otherwise.
     */
    canRemove(profile) {
        return (this.profile.id === profile.id && (this.status === Types.Common.Pending || this.status === Types.System.Draft));
    }
    /**
     * Determines whether or not the issue can be renounced by the given profile.
     * @param profile Profile entity.
     * @returns Returns true when the issue can be renounced, false otherwise.
     */
    canRenounce(profile) {
        return this.profile.id === profile.id && this.declinedContactsIdList.length === this.contactsIdList.length - 1;
    }
};
__decorate([
    RestDB.Schema.Primary(),
    RestDB.Schema.Id(),
    Class.Public()
], Entity.prototype, "id", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Id(),
    Class.Public()
], Entity.prototype, "accountId", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Object(() => Profiles.Entity, [
        'id',
        'contact.id',
        'contact.pictureId',
        'contact.name',
        'contact.personal.firstName',
        'contact.personal.lastName',
        'contact.professional.denomination'
    ]),
    Class.Public()
], Entity.prototype, "profile", void 0);
__decorate([
    RestDB.Schema.Object(() => Tasks.Entity, ['id', 'section', 'action', 'parameters']),
    Class.Public()
], Entity.prototype, "task", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Id(),
    Class.Public()
], Entity.prototype, "contextId", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Array(String),
    Class.Public()
], Entity.prototype, "grantsIdList", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Date(),
    Class.Public()
], Entity.prototype, "createdAt", void 0);
__decorate([
    RestDB.Schema.Date(),
    Class.Public()
], Entity.prototype, "updatedAt", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Enumeration([...Object.values(Types.System), ...Object.values(Types.Common)]),
    Class.Public()
], Entity.prototype, "status", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Number(),
    Class.Public()
], Entity.prototype, "position", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Array(Internals.Change),
    Class.Public()
], Entity.prototype, "changes", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Array(String),
    Class.Public()
], Entity.prototype, "contactsIdList", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Array(String),
    Class.Public()
], Entity.prototype, "acceptedContactsIdList", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Array(String),
    Class.Public()
], Entity.prototype, "declinedContactsIdList", void 0);
__decorate([
    Class.Public()
], Entity.prototype, "testMember", null);
__decorate([
    Class.Public()
], Entity.prototype, "isPending", null);
__decorate([
    Class.Public()
], Entity.prototype, "isAccepted", null);
__decorate([
    Class.Public()
], Entity.prototype, "isDeclined", null);
__decorate([
    Class.Public()
], Entity.prototype, "isResolved", null);
__decorate([
    Class.Public()
], Entity.prototype, "canRemove", null);
__decorate([
    Class.Public()
], Entity.prototype, "canRenounce", null);
Entity = __decorate([
    RestDB.Schema.Entity('issues'),
    Class.Describe()
], Entity);
exports.Entity = Entity;
//# sourceMappingURL=entity.js.map