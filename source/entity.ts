/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Profiles from '@juridoc/client-profiles';
import * as Contacts from '@juridoc/client-contacts';
import * as Tasks from '@juridoc/client-tasks';

import * as Types from './types';
import * as Internals from './internals';

/**
 * Issue entity class.
 */
@RestDB.Schema.Entity('issues')
@Class.Describe()
export class Entity extends Class.Null {
  /**
   * Issue id.
   */
  @RestDB.Schema.Primary()
  @RestDB.Schema.Id()
  @Class.Public()
  public id!: string;

  /**
   * Account Id.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Id()
  @Class.Public()
  public accountId!: string;

  /**
   * Profile entity.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Object(() => Profiles.Entity, [
    'id',
    'contact.id',
    'contact.pictureId',
    'contact.name',
    'contact.personal.firstName',
    'contact.personal.lastName',
    'contact.professional.denomination'
  ])
  @Class.Public()
  public profile!: Profiles.Entity;

  /**
   * Task entity.
   */
  @RestDB.Schema.Object(() => Tasks.Entity, ['id', 'section', 'action', 'parameters'])
  @Class.Public()
  public task?: Tasks.Entity;

  /**
   * Context id.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Id()
  @Class.Public()
  public contextId!: string;

  /**
   * List of sharing grants.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Array(String)
  @Class.Public()
  public grantsIdList!: string[];

  /**
   * Creation date.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Date()
  @Class.Public()
  public createdAt!: Date;

  /**
   * Update date.
   */
  @RestDB.Schema.Date()
  @Class.Public()
  public updatedAt?: Date;

  /**
   * Issue status.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Enumeration([...Object.values(Types.System), ...Object.values(Types.Common)])
  @Class.Public()
  public status!: Types.System | Types.Common;

  /**
   * Issue position.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Number()
  @Class.Public()
  public position!: number;

  /**
   * Issue changes.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Array(Internals.Change)
  @Class.Public()
  public changes!: Internals.Change[];

  /**
   * Contact list of members in this issue.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Array(String)
  @Class.Public()
  public contactsIdList!: string[];

  /**
   * Contact list of members who has accepted the issue.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Array(String)
  @Class.Public()
  public acceptedContactsIdList!: string[];

  /**
   * Contact list of members who has declined the issue.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Array(String)
  @Class.Public()
  public declinedContactsIdList!: string[];

  /**
   * Test whether or not the given contact is a member.
   * @param contact Contact entity.
   * @returns Returns true when the specified contact is a member, false otherwise.
   */
  @Class.Public()
  public testMember(contact: Contacts.Entity): boolean {
    return this.contactsIdList.includes(contact.id);
  }

  /**
   * Determines whether or not the issue is pending.
   * @param contact Optional contact entity.
   * @returns Returns true when the issue is pending, false otherwise.
   */
  @Class.Public()
  public isPending(contact?: Contacts.Entity): boolean {
    if (contact !== void 0) {
      return (
        this.testMember(contact) &&
        !this.acceptedContactsIdList.includes(contact.id) &&
        !this.declinedContactsIdList.includes(contact.id)
      );
    }
    return this.status === Types.Common.Pending || this.status === Types.Common.Countered;
  }

  /**
   * Determines whether or not the issue is accepted.
   * @param contact Optional contact entity.
   * @returns Returns true when the issue is accepted, false otherwise.
   */
  @Class.Public()
  public isAccepted(contact?: Contacts.Entity): boolean {
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
  @Class.Public()
  public isDeclined(contact?: Contacts.Entity): boolean {
    if (contact !== void 0) {
      return this.testMember(contact) && this.declinedContactsIdList.includes(contact.id);
    }
    return this.status === Types.Common.Declined;
  }

  /**
   * Determines whether or not the issue is resolved.
   * @returns Returns true when the issue is resolved, false otherwise.
   */
  @Class.Public()
  public isResolved(): boolean {
    return this.status === Types.Common.Accepted || this.status === Types.Common.Renounced;
  }

  /**
   * Determines whether or not the issue can be removed by the given profile.
   * @param profile Profile entity.
   * @returns Returns true when the issue can be removed, false otherwise.
   */
  @Class.Public()
  public canRemove(profile: Profiles.Entity): boolean {
    return (
      this.profile.id === profile.id && (this.status === Types.Common.Pending || this.status === Types.System.Draft)
    );
  }

  /**
   * Determines whether or not the issue can be renounced by the given profile.
   * @param profile Profile entity.
   * @returns Returns true when the issue can be renounced, false otherwise.
   */
  @Class.Public()
  public canRenounce(profile: Profiles.Entity): boolean {
    return this.profile.id === profile.id && this.declinedContactsIdList.length === this.contactsIdList.length - 1;
  }
}
