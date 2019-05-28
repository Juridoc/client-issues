/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Types from '../types';

/**
 * Issue update request.
 */
@RestDB.Schema.Entity('issues/{id}')
@Class.Describe()
export class Update extends Class.Null {
  /**
   * Update type.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Enumeration(Object.values(Types.Update))
  @Class.Public()
  public type!: Types.Update;

  /**
   * Change replacement.
   */
  @RestDB.Schema.String()
  @Class.Public()
  public replacement?: string;
}
