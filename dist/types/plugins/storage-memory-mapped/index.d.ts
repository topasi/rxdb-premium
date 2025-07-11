import { RxStorage, RxStorageInstance, RxStorageInstanceCreationParams } from 'rxdb/plugins/core';
import { RxStorageInstanceMemory } from 'rxdb/plugins/storage-memory';
import type { MemoryMappedInstanceCreationOptions, MemoryMappedPersistentStorage, MemoryMappedStorageInternals, MemoryMappedStorageSettings } from './types.ts';
import { MemoryMappedRxStorageInstance } from './memory-mapped-storage-instance.ts';
import { BlockMap } from './block-map.ts';
export type * from './types.ts';
export type * from './helper.ts';
export type * from './memory-mapped-storage-instance.ts';
export declare class RxStorageMemoryMapped implements RxStorage<MemoryMappedStorageInternals<any>, MemoryMappedInstanceCreationOptions> {
    settings: MemoryMappedStorageSettings;
    name: string;
    readonly rxdbVersion = "15.30.2";
    openInstances: Map<string, Promise<MemoryMappedRxStorageInstance<any>>>;
    constructor(settings: MemoryMappedStorageSettings);
    createStorageInstance<RxDocType>(params: RxStorageInstanceCreationParams<RxDocType, MemoryMappedInstanceCreationOptions>): Promise<RxStorageInstance<RxDocType, MemoryMappedStorageInternals<any>, MemoryMappedInstanceCreationOptions>>;
}
export declare function loadInitialData<RxDocType>(persistentInstance: MemoryMappedPersistentStorage<RxDocType>, memoryInstance: RxStorageInstanceMemory<RxDocType>, blockMap: BlockMap<RxDocType>): Promise<{
    lastBlockId: string | undefined;
    toCleanupByBlockId: Map<string, Set<string>>;
}>;
export declare function getMemoryMappedRxStorage(settings: MemoryMappedStorageSettings): RxStorageMemoryMapped;
