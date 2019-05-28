/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as Types from '../types';
/**
 * Issue creation request.
 */
export declare class Create extends Class.Null {
    /**
     * Context Id.
     */
    contextId: string;
    /**
     * Change type.
     */
    type: Types.Change;
    /**
     * Change selection.
     */
    selection: string;
    /**
     * Change replacement.
     */
    replacement: string;
    /**
     * Change position.
     */
    position: number;
}
