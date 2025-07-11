import { RxDocumentData, RxStorageDefaultCheckpoint } from 'rxdb/plugins/core';
import { RxStorageInstanceAbstractFilesystem } from './storage-instance.ts';
import { TaskQueueRunState } from './task-queue.ts';
export declare function getChangedDocumentsSince<RxDocType>(instance: RxStorageInstanceAbstractFilesystem<RxDocType>, runState: TaskQueueRunState<RxDocType>, limit: number, checkpoint?: RxStorageDefaultCheckpoint): Promise<{
    documents: RxDocumentData<RxDocType>[];
    checkpoint: RxStorageDefaultCheckpoint;
}>;
