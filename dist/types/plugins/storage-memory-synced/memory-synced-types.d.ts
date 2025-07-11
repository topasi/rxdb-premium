import type { RxStorageInstanceMemory } from 'rxdb/plugins/storage-memory';
import type { RxConflictResultionTask, RxConflictResultionTaskSolution, RxStorage, RxStorageInstance, RxStorageInstanceReplicationState, RxStorageReplicationMeta } from 'rxdb/plugins/core';
import { Subject } from 'rxjs';
export type MemorySyncedStorageSettings = {
    storage: RxStorage<any, any>;
    /**
     * Defines how many document
     * get replicated in a single bulk.
     * [default=50]
     */
    batchSize?: number;
    /**
     * By default, the parent/master instance will not have any indexes
     * for better performance on write operations and faster instantiation of
     * the RxStorageInstance.
     * If this is set to true, the master will anyway keep all indexes. This
     * is usefull when you want to no longer use the memory-synced RxStorage in
     * the future, without having to do a migration.
     * Or when you want to do direct operations on the master RxStorageInstance.
     *
     * [default=false]
     */
    keepIndexesOnParent?: boolean;
    /**
     * If set to true, all write operations will resolve AFTER the writes
     * have been persisted from the memory to the parentStorage.
     * This ensures writes are not lost even if the JavaScript process exits
     * between memory writes and the persistence interval.
     * default=false
     */
    awaitWritePersistence?: boolean;
    /**
     * After a write, await until this resolves
     * before replicating with the master storage.
     * (optional)
     * @see rxdb/src/rx-storage-replication.ts
     */
    waitBeforePersist?: () => Promise<any>;
};
export type MemorySyncedStorageInternals<RxDocType> = {
    masterInstance: RxStorageInstance<RxDocType, any, any>;
    metaInstance: RxStorageInstance<RxStorageReplicationMeta<RxDocType, any>, any, any>;
    forkInstance: RxStorageInstanceMemory<RxDocType>;
    /**
     * Resolves when all initialization has been done.
     * The storage must await this before running any methods.
     */
    initDonePromise: Promise<any>;
    replicationStatePromise: Promise<RxStorageInstanceReplicationState<RxDocType>>;
    conflictTasks$: Subject<RxConflictResultionTask<RxDocType>>;
    resolvedConflictTasks$: Subject<RxConflictResultionTaskSolution<RxDocType>>;
    openConflictResolutions: Map<any, Promise<any>>;
};
export type MemorySyncedInstanceCreationOptions = {};
