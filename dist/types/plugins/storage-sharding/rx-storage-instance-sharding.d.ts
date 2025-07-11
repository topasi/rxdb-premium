import { BulkWriteRow, EventBulk, PreparedQuery, RxConflictResultionTask, RxConflictResultionTaskSolution, RxDocumentData, RxJsonSchema, RxStorage, RxStorageBulkWriteResponse, RxStorageChangeEvent, RxStorageCountResult, RxStorageInstance, RxStorageQueryResult } from 'rxdb/plugins/core';
import { Observable } from 'rxjs';
import { ShardingChangesCheckpoint, ShardingStorageInternals } from './sharding-types.ts';
export declare class RxStorageInstanceSharding<RxDocType> implements RxStorageInstance<RxDocType, ShardingStorageInternals, any, ShardingChangesCheckpoint> {
    readonly storage: RxStorage<any, any>;
    readonly databaseName: string;
    readonly collectionName: string;
    readonly schema: Readonly<RxJsonSchema<RxDocumentData<RxDocType>>>;
    readonly internals: ShardingStorageInternals;
    readonly options: Readonly<any>;
    readonly primaryPath: keyof RxDocType;
    private changes$;
    constructor(storage: RxStorage<any, any>, databaseName: string, collectionName: string, schema: Readonly<RxJsonSchema<RxDocumentData<RxDocType>>>, internals: ShardingStorageInternals, options: Readonly<any>);
    bulkWrite(documentWrites: BulkWriteRow<RxDocType>[], context: string): Promise<RxStorageBulkWriteResponse<RxDocType>>;
    findDocumentsById(docIds: string[], withDeleted: boolean): Promise<RxDocumentData<RxDocType>[]>;
    query(originalPreparedQuery: PreparedQuery<RxDocType>): Promise<RxStorageQueryResult<RxDocType>>;
    count(originalPreparedQuery: PreparedQuery<RxDocType>): Promise<RxStorageCountResult>;
    getChangedDocumentsSince(limit: number, checkpoint?: ShardingChangesCheckpoint): Promise<{
        documents: RxDocumentData<RxDocType>[];
        checkpoint: ShardingChangesCheckpoint;
    }>;
    getAttachmentData(documentId: string, attachmentId: string, digest: string): Promise<string>;
    changeStream(): Observable<EventBulk<RxStorageChangeEvent<RxDocumentData<RxDocType>>, any>>;
    cleanup(minimumDeletedTime: number): Promise<boolean>;
    close(): Promise<void>;
    remove(): Promise<void>;
    conflictResultionTasks(): Observable<RxConflictResultionTask<RxDocType>>;
    resolveConflictResultionTask(taskSolution: RxConflictResultionTaskSolution<RxDocType>): Promise<void>;
}
