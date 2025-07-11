import { RxStorage, RxStorageInstance, RxStorageInstanceCreationParams } from 'rxdb/plugins/core';
import type { MemorySyncedInstanceCreationOptions, MemorySyncedStorageInternals, MemorySyncedStorageSettings } from './memory-synced-types.ts';
export declare class RxStorageMemorySynced implements RxStorage<MemorySyncedStorageInternals<any>, MemorySyncedInstanceCreationOptions> {
    settings: MemorySyncedStorageSettings;
    name: string;
    readonly rxdbVersion = "15.30.2";
    constructor(settings: MemorySyncedStorageSettings);
    /**
     * Contains the databaseInstanceToken of each database
     * that was created for the first time.
     * This can be used to improve initial page load because on newly (for the first time ever)
     * created storage instances we do not have to await the creation of the master instance
     * or the initial sync.
     * [databaseInstanceToken]->Set<[already created collection names]>;
     */
    readonly firstInstanceTokens: {
        [databaseInstanceToken: string]: Set<string>;
    };
    createStorageInstance<RxDocType>(params: RxStorageInstanceCreationParams<RxDocType, MemorySyncedInstanceCreationOptions>): Promise<RxStorageInstance<RxDocType, MemorySyncedStorageInternals<any>, MemorySyncedInstanceCreationOptions>>;
}
export declare function getMemorySyncedRxStorage(settings: MemorySyncedStorageSettings): RxStorageMemorySynced;
export * from './memory-synced-types.ts';
export * from './memory-synced-storage-instance.ts';
