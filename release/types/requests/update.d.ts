/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as Types from '../types';
/**
 * Issue update request.
 */
export declare class Update extends Class.Null {
    /**
     * Update type.
     */
    type: Types.Update;
    /**
     * Change replacement.
     */
    replacement?: string;
}
