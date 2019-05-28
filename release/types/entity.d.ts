/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as Profiles from '@juridoc/client-profiles';
import * as Contacts from '@juridoc/client-contacts';
import * as Tasks from '@juridoc/client-tasks';
import * as Types from './types';
import * as Internals from './internals';
/**
 * Issue entity class.
 */
export declare class Entity extends Class.Null {
    /**
     * Issue id.
     */
    id: string;
    /**
     * Account Id.
     */
    accountId: string;
    /**
     * Profile entity.
     */
    profile: Profiles.Entity;
    /**
     * Task entity.
     */
    task?: Tasks.Entity;
    /**
     * Context id.
     */
    contextId: string;
    /**
     * List of sharing grants.
     */
    grantsIdList: string[];
    /**
     * Creation date.
     */
    createdAt: Date;
    /**
     * Update date.
     */
    updatedAt?: Date;
    /**
     * Issue status.
     */
    status: Types.System | Types.Common;
    /**
     * Issue position.
     */
    position: number;
    /**
     * Issue changes.
     */
    changes: Internals.Change[];
    /**
     * Contact list of members in this issue.
     */
    contactsIdList: string[];
    /**
     * Contact list of members who has accepted the issue.
     */
    acceptedContactsIdList: string[];
    /**
     * Contact list of members who has declined the issue.
     */
    declinedContactsIdList: string[];
    /**
     * Test whether or not the given contact is a member.
     * @param contact Contact entity.
     * @returns Returns true when the specified contact is a member, false otherwise.
     */
    testMember(contact: Contacts.Entity): boolean;
    /**
     * Determines whether or not the issue is pending.
     * @param contact Optional contact entity.
     * @returns Returns true when the issue is pending, false otherwise.
     */
    isPending(contact?: Contacts.Entity): boolean;
    /**
     * Determines whether or not the issue is accepted.
     * @param contact Optional contact entity.
     * @returns Returns true when the issue is accepted, false otherwise.
     */
    isAccepted(contact?: Contacts.Entity): boolean;
    /**
     * Determines whether or not the issue is declined.
     * @param contact Optional contact entity.
     * @returns Returns true when the issue is declined, false otherwise.
     */
    isDeclined(contact?: Contacts.Entity): boolean;
    /**
     * Determines whether or not the issue is resolved.
     * @returns Returns true when the issue is resolved, false otherwise.
     */
    isResolved(): boolean;
    /**
     * Determines whether or not the issue can be removed by the given profile.
     * @param profile Profile entity.
     * @returns Returns true when the issue can be removed, false otherwise.
     */
    canRemove(profile: Profiles.Entity): boolean;
    /**
     * Determines whether or not the issue can be renounced by the given profile.
     * @param profile Profile entity.
     * @returns Returns true when the issue can be renounced, false otherwise.
     */
    canRenounce(profile: Profiles.Entity): boolean;
}
