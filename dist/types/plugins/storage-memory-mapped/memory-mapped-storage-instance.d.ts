import { BulkWriteRow, EventBulk, RxDocumentData, RxJsonSchema, RxStorageBulkWriteResponse, RxStorageChangeEvent, RxStorageInstance, RxStorageQueryResult, StringKeys, RxConflictResultionTask, RxConflictResultionTaskSolution, RxStorageDefaultCheckpoint, RxStorageCountResult } from 'rxdb/plugins/core';
import { Observable } from 'rxjs';
import type { MemoryMappedInstanceCreationOptions, MemoryMappedStorageInternals, RxStorageMemoryMapped } from './index';
export declare class MemoryMappedRxStorageInstance<RxDocType> implements RxStorageInstance<RxDocType, MemoryMappedStorageInternals<RxDocType>, MemoryMappedInstanceCreationOptions, RxStorageDefaultCheckpoint> {
    readonly storage: RxStorageMemoryMapped;
    readonly databaseName: string;
    readonly collectionName: string;
    readonly databaseInstanceToken: string;
    readonly schema: Readonly<RxJsonSchema<RxDocumentData<RxDocType>>>;
    readonly internals: MemoryMappedStorageInternals<RxDocType>;
    readonly options: Readonly<MemoryMappedInstanceCreationOptions>;
    readonly devMode: boolean;
    readonly primaryPath: StringKeys<RxDocType>;
    closed: boolean;
    writeQueue: Promise<any>;
    writeTasks: Promise<RxDocumentData<RxDocType>[]>[];
    constructor(storage: RxStorageMemoryMapped, databaseName: string, collectionName: string, databaseInstanceToken: string, schema: Readonly<RxJsonSchema<RxDocumentData<RxDocType>>>, internals: MemoryMappedStorageInternals<RxDocType>, options: Readonly<MemoryMappedInstanceCreationOptions>, devMode: boolean);
    bulkWrite(documentWrites: BulkWriteRow<RxDocType>[], context: string): Promise<RxStorageBulkWriteResponse<RxDocType>>;
    findDocumentsById(ids: string[], withDeleted: boolean): Promise<RxDocumentData<RxDocType>[]>;
    query(preparedQuery: any): Promise<RxStorageQueryResult<RxDocType>>;
    count(preparedQuery: any): Promise<RxStorageCountResult>;
    getAttachmentData(documentId: string, attachmentId: string, digest: string): Promise<string>;
    changeStream(): Observable<EventBulk<RxStorageChangeEvent<RxDocumentData<RxDocType>>, RxStorageDefaultCheckpoint>>;
    cleanup(minimumDeletedTime: number): Promise<boolean>;
    close(): Promise<void>;
    remove(): Promise<void>;
    conflictResultionTasks(): Observable<RxConflictResultionTask<RxDocType>>;
    resolveConflictResultionTask(_taskSolution: RxConflictResultionTaskSolution<RxDocType>): Promise<void>;
}
