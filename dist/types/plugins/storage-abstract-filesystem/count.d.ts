import { PreparedQuery, RxStorageCountResult } from 'rxdb/plugins/core';
import { RxStorageInstanceAbstractFilesystem } from './storage-instance.ts';
import { TaskQueueRunState } from './task-queue.ts';
export declare function abstractFilesystemCount<RxDocType>(instance: RxStorageInstanceAbstractFilesystem<RxDocType>, preparedQuery: PreparedQuery<RxDocType>, runState: TaskQueueRunState<RxDocType>): Promise<RxStorageCountResult>;
