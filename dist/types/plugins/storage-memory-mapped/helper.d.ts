import { RxDocumentData, RxJsonSchema } from 'rxdb/plugins/core';
import type { MemoryMappedPersistentStorage, PersistentStorageBlock } from './types.ts';
import type { MemoryMappedRxStorageInstance } from './memory-mapped-storage-instance.ts';
export declare const MEMORY_MAPPED_SCHEMA_TITLE = "RxJsonSchemaMemoryMappedPersistenceBlock";
export declare const MEMORY_MAPPED_ID_SIZE = 12;
export declare function getMemoryMappedPersistenceSchema<RxDocType>(docSchema: RxJsonSchema<RxDocType>): RxJsonSchema<RxDocumentData<PersistentStorageBlock<RxDocType>>>;
export declare function getNextBlockId(instance: MemoryMappedRxStorageInstance<any>): Promise<string>;
export declare function getNonCleanedUpBlocks<RxDocType>(persistentInstance: MemoryMappedPersistentStorage<RxDocType>): Promise<RxDocumentData<PersistentStorageBlock<RxDocType>>[]>;
