import type { RxStorageInstanceMemory } from 'rxdb/plugins/storage-memory';
import type { RxConflictResultionTask, RxDocumentData, RxStorage, RxStorageInstance } from 'rxdb/plugins/core';
import { Subject } from 'rxjs';
import { LeaderElector } from 'broadcast-channel';
import { BlockMap } from './block-map';
export type MemoryMappedPersistentStorage<RxDocType> = RxStorageInstance<PersistentStorageBlock<RxDocType>, any, any>;
export type MemoryMappedStorageSettings = {
    /**
     * The storage that is used under the memory storage
     * to store persistend data.
     */
    storage: RxStorage<any, any>;
    /**
     * Defines how many document
     * get stored in a single batch.
     * [default=50]
     */
    batchSize?: number;
    /**
     * If set to true, all write operations will resolve AFTER the writes
     * have been persisted from the memory to the parentStorage.
     * This ensures writes are not lost even if the JavaScript process exits
     * between memory writes and the persistence interval.
     * default=false
     */
    awaitWritePersistence?: boolean;
};
export type MemoryMappedStorageInternals<RxDocType> = {
    persistentInstancePromise: Promise<MemoryMappedPersistentStorage<RxDocType>>;
    memoryInstance: RxStorageInstanceMemory<RxDocType>;
    cacheKey: string;
    refCount: number;
    /**
     * To prevent multiInstance usage, we run a leader election with a timeout
     * in dev-mode. This has to be closed when the storage gets closed.
     */
    leaderElector: LeaderElector | undefined;
    /**
     * Resolves when all initialization has been done.
     * The storage must await this before running any methods.
     */
    initDonePromise: Promise<{
        lastBlockId: string | undefined;
    }>;
    blockMap: BlockMap<RxDocType>;
    /**
     * To easier test the conflict resolution,
     * the memory storage exposes the conflict resolution task subject
     * so that we can inject own tasks during tests.
     */
    conflictResultionTasks$: Subject<RxConflictResultionTask<RxDocType>>;
};
export type MemoryMappedInstanceCreationOptions = {};
/**
 * For better performance, the persistent storage
 * stores documents in blocks instead of single docs.
 */
export type PersistentStorageBlock<RxDocType> = {
    id: string;
    /**
     * CleanedUp
     * True if already cleaned up
     */
    c: boolean;
    /**
     * Ids of the blocks where this block is
     * a substitute for.
     */
    s: string[];
    /**
     * The data with the documents
     * of this block
     */
    d: RxDocumentData<RxDocType>[];
};
