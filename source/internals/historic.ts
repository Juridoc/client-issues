/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

/**
 * Historic change, internal entity class.
 */
@RestDB.Schema.Entity('issues/historic')
@Class.Describe()
export class Historic extends Class.Null {
  /**
   * Profile Id.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Id()
  @Class.Public()
  public profileId!: string;

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
}
