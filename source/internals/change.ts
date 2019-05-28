/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Types from '../types';

import { Historic } from './historic';

/**
 * Issues change, internal entity class.
 */
@RestDB.Schema.Entity('issues/change')
@Class.Describe()
export class Change extends Class.Null {
  /**
   * Change type.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Enumeration(Object.values(Types.Change))
  @Class.Public()
  public type!: Types.Change;

  /**
   * Creation date.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Date()
  @Class.Public()
  public createdAt!: Date;

  /**
   * Change selection.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public selection!: string;

  /**
   * Change replacement.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public replacement!: string;

  /**
   * Previous historic.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Object(Historic)
  @Class.Public()
  public historic!: Historic;
}
