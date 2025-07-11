import { CategorizeBulkWriteRowsOutput, EventBulk, RxDocumentData, RxStorageChangeEvent } from 'rxdb/plugins/core';
import { State } from './types.ts';
import { RxStorageInstanceAbstractFilesystem } from './storage-instance.ts';
import { TaskQueueRunState } from './task-queue.ts';
export declare function appendAttachmentFiles<RxDocType>(runState: TaskQueueRunState<RxDocType>, storageInstance: RxStorageInstanceAbstractFilesystem<RxDocType>, categorized: CategorizeBulkWriteRowsOutput<RxDocType>, state: State): Promise<void>;
export declare function clearDeletedAttachments<RxDocType>(runState: TaskQueueRunState<RxDocType>, storageInstance: RxStorageInstanceAbstractFilesystem<RxDocType>, state: State, eventBulk: EventBulk<RxStorageChangeEvent<RxDocumentData<RxDocType>>, any>): Promise<void>;
export declare function getAttachmentData<RxDocType>(runState: TaskQueueRunState<RxDocType>, storageInstance: RxStorageInstanceAbstractFilesystem<RxDocType>, documentId: string, attachmentId: string, digest: string): Promise<string>;
export declare function getAttachmentFilename(documentId: string, attachmentId: string, digest: string): Promise<string>;
