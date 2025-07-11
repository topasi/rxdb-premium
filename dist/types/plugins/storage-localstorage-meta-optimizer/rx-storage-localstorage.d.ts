import { BulkWriteRow, EventBulk, RxDocumentData, RxJsonSchema, RxStorage, RxStorageBulkWriteResponse, RxStorageChangeEvent, RxStorageDefaultCheckpoint, RxStorageInstance, RxStorageInstanceCreationParams, RxStorageQueryResult, StringKeys, RxConflictResultionTask, RxConflictResultionTaskSolution, PreparedQuery, RxStorageCountResult } from 'rxdb/plugins/core';
import { Observable } from 'rxjs';
export declare const RX_STORAGE_NAME_LOCALSTORAGE = "localstorage";
export type LocalstorageStorageInternals<RxDocType = any> = {
    docsById: Map<string, RxDocumentData<RxDocType>>;
};
export type LocalstorageInstanceCreationOptions = {};
export type LocalstorageStorageSettings = {};
export type ChangeStreamStoredData<RxDocType> = {
    databaseInstanceToken: string;
    eventBulk: EventBulk<RxStorageChangeEvent<RxDocumentData<RxDocType>>, any>;
};
export declare class RxStorageLocalstorage implements RxStorage<LocalstorageStorageInternals, LocalstorageInstanceCreationOptions> {
    settings: LocalstorageStorageSettings;
    name: string;
    readonly rxdbVersion = "15.30.2";
    constructor(settings: LocalstorageStorageSettings);
    createStorageInstance<RxDocType>(params: RxStorageInstanceCreationParams<RxDocType, LocalstorageInstanceCreationOptions>): Promise<RxStorageInstanceLocalstorage<RxDocType>>;
}
export declare function getRxStorageLocalstorage(settings?: Partial<LocalstorageStorageSettings>): RxStorageLocalstorage;
export declare function getStorageEventStream(): Observable<{
    fromStorageEvent: boolean;
    key: string;
    newValue: string | null;
    databaseInstanceToken?: string | undefined;
}>;
export declare class RxStorageInstanceLocalstorage<RxDocType> implements RxStorageInstance<RxDocType, LocalstorageStorageInternals, LocalstorageInstanceCreationOptions, RxStorageDefaultCheckpoint> {
    readonly storage: RxStorageLocalstorage;
    readonly databaseName: string;
    readonly collectionName: string;
    readonly schema: Readonly<RxJsonSchema<RxDocumentData<RxDocType>>>;
    readonly internals: LocalstorageStorageInternals;
    readonly options: Readonly<LocalstorageInstanceCreationOptions>;
    readonly settings: LocalstorageStorageSettings;
    readonly databaseInstanceToken: string;
    readonly primaryPath: StringKeys<RxDocType>;
    /**
     * Under this key the whole state
     * will be stored as stringified json
     * inside of the localstorage.
     */
    readonly storageKey: string;
    readonly changestreamStorageKey: string;
    private changeStreamSub;
    private changes$;
    closed?: Promise<void>;
    constructor(storage: RxStorageLocalstorage, databaseName: string, collectionName: string, schema: Readonly<RxJsonSchema<RxDocumentData<RxDocType>>>, internals: LocalstorageStorageInternals, options: Readonly<LocalstorageInstanceCreationOptions>, settings: LocalstorageStorageSettings, databaseInstanceToken: string);
    bulkWrite(documentWrites: BulkWriteRow<RxDocType>[], context: string): Promise<RxStorageBulkWriteResponse<RxDocType>>;
    findDocumentsById(docIds: string[], withDeleted: boolean): Promise<RxDocumentData<RxDocType>[]>;
    query(preparedQuery: PreparedQuery<RxDocType>): Promise<RxStorageQueryResult<RxDocType>>;
    count(preparedQuery: PreparedQuery<RxDocType>): Promise<RxStorageCountResult>;
    getChangedDocumentsSince(limit: number, checkpoint?: RxStorageDefaultCheckpoint): Promise<{
        documents: RxDocumentData<RxDocType>[];
        checkpoint: RxStorageDefaultCheckpoint;
    }>;
    changeStream(): Observable<EventBulk<RxStorageChangeEvent<RxDocumentData<RxDocType>>, RxStorageDefaultCheckpoint>>;
    cleanup(minimumDeletedTime: number): Promise<boolean>;
    getAttachmentData(_documentId: string, _attachmentId: string): Promise<string>;
    remove(): Promise<void>;
    close(): Promise<void>;
    conflictResultionTasks(): Observable<RxConflictResultionTask<RxDocType>>;
    resolveConflictResultionTask(_taskSolution: RxConflictResultionTaskSolution<RxDocType>): Promise<void>;
}
export declare function localstoragePersist(storageInstance: RxStorageInstanceLocalstorage<any>): void;
export declare function createLocalstorageStorageInstance<RxDocType>(storage: RxStorageLocalstorage, params: RxStorageInstanceCreationParams<RxDocType, LocalstorageInstanceCreationOptions>, settings: LocalstorageStorageSettings): Promise<RxStorageInstanceLocalstorage<RxDocType>>;
export declare function getStorageState<RxDocType>(primaryPath: string, storageKey: string): Map<string, RxDocumentData<RxDocType>>;
