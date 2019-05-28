/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';
import * as Core from '@juridoc/client-core';
import * as Requests from './requests';
import { Entity } from './entity';
/**
 * Issues mapper class.
 */
export declare class Mapper extends Class.Null {
    /**
     * Client instance.
     */
    private client;
    /**
     * Mapper instance.
     */
    private mapper;
    /**
     * Get the error entity from the last operation.
     */
    get error(): Core.Entities.Error | undefined;
    /**
     * Create a new issue based on the specified creation request.
     * @param request Issue creation request.
     * @returns Returns a promise to get the issue Id.
     * @throws Throws an error when the issue wasn't created.
     */
    create(request: Requests.Create): Promise<string>;
    /**
     * Load the issue that corresponds to the specified issue Id.
     * @param id Issue Id.
     * @param fields Fields to be selected.
     * @returns Returns a promise to get the issue entity.
     * @throws Throws an error when the issue wasn't found.
     */
    load(id: string, fields?: string[]): Promise<Entity>;
    /**
     * Update the issue that corresponds to the specified issue Id based on the given update request.
     * @param id Issue Id.
     * @param request Issue update request.
     * @returns Returns a promise to get true when the issue was updated, false otherwise.
     * @throws Throws an error when the issue wasn't found.
     */
    modify(id: string, request: Requests.Update): Promise<boolean>;
    /**
     * Add a new message the issue that corresponds to the specified Id based on the given message request.
     * @param id Issue Id.
     * @param request Message request.
     * @returns Returns a promise to get true when the message was added, false otherwise.
     * @throws Throws an error when the issue wasn't found.
     */
    message(id: string, request: Requests.Message): Promise<boolean>;
    /**
     * List all documents that corresponds to the specified filter.
     * @param query Query filter.
     * @param fields Fields to be selected.
     * @returns Returns a promise to get the issue list or undefined when an error occurs.
     */
    list(query: RestDB.Query, fields?: string[]): Promise<Entity[] | undefined>;
    /**
     * Count all documents that corresponds to the specified filter.
     * @param query Query filter.
     * @returns Returns a promise to get the number of documents or undefined when an error occurs.
     */
    count(query: RestDB.Query): Promise<number | undefined>;
    /**
     * Delete the issue that corresponds to the specified issue Id.
     * @param id Issue Id.
     * @returns Returns a promise to get true when the issue was deleted, false otherwise.
     * @throws Throws an error when the issue wasn't found.
     */
    remove(id: string): Promise<boolean>;
}
