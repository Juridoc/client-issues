/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
/**
 * Historic change, internal entity class.
 */
export declare class Historic extends Class.Null {
    /**
     * Profile Id.
     */
    profileId: string;
    /**
     * Contact list of members who has accepted the issue.
     */
    acceptedContactsIdList: string[];
    /**
     * Contact list of members who has declined the issue.
     */
    declinedContactsIdList: string[];
}
