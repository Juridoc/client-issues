/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as Types from '../types';
import { Historic } from './historic';
/**
 * Issues change, internal entity class.
 */
export declare class Change extends Class.Null {
    /**
     * Change type.
     */
    type: Types.Change;
    /**
     * Creation date.
     */
    createdAt: Date;
    /**
     * Change selection.
     */
    selection: string;
    /**
     * Change replacement.
     */
    replacement: string;
    /**
     * Previous historic.
     */
    historic: Historic;
}
