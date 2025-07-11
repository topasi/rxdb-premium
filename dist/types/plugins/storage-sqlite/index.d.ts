import { RxStorage, RxStorageInstanceCreationParams } from 'rxdb/plugins/core';
import { RxStorageInstanceSQLite } from './sqlite-storage-instance.ts';
import type { SQLiteInternals, SQLiteInstanceCreationOptions, SQLiteStorageSettings } from './sqlite-types.ts';
export * from './sqlite-helpers.ts';
export * from './sqlite-types.ts';
export * from './sqlite-storage-instance.ts';
export * from './sqlite-basics-helpers.ts';
export declare class RxStorageSQLite implements RxStorage<SQLiteInternals, SQLiteInstanceCreationOptions> {
    settings: SQLiteStorageSettings;
    name: string;
    readonly rxdbVersion = "15.30.2";
    constructor(settings: SQLiteStorageSettings);
    createStorageInstance<RxDocType>(params: RxStorageInstanceCreationParams<RxDocType, SQLiteInstanceCreationOptions>): Promise<RxStorageInstanceSQLite<RxDocType>>;
    /**
     * Helper functions for SQLite attachments.
     * We need that because some runtimes do not support
     * storing buffers, so we have to store a plain base64 string instead.
     */
    base64AttachmentToStoredAttachmentsData(base64: string): any;
    storedAttachmentsDataToBase64(stored: any): string;
}
export declare function getRxStorageSQLite(settings: SQLiteStorageSettings): RxStorageSQLite;
