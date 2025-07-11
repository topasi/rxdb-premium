import { getIndexableStringMonad, EventBulk, RxStorageChangeEvent, RxDocumentData } from 'rxdb/plugins/core';
import { getStorageInstanceInternalState } from './helpers.ts';
import { TaskQueue } from './task-queue.ts';
export type State = Awaited<ReturnType<typeof getStorageInstanceInternalState>>;
export type AbstractFilesystemStorageInternals = {
    taskQueue: TaskQueue<any>;
    statePromise: Promise<State>;
};
export type AbstractFilesystemInstanceCreationOptions = {};
export type AccessHandles = {
    [name: string]: FileSystemFileHandle;
};
export type IndexableStringFns<RxDocType> = Map<string, ReturnType<typeof getIndexableStringMonad<RxDocType>>>;
export type MetaIdMap = Map<string, IndexRow>;
/**
 * Indexes
 */
export type IndexRow = [
    string,
    string,
    number,
    number
];
export type ChangelogOperationKey = 'A' | // Add row
'D' | // Delete row
'R';
/**
 * An operation that was stored on the changelog.
 */
export type ChangelogOperation = [
    number,
    /**
     * RowId on which the operation should run
     */
    number,
    ChangelogOperationKey,
    IndexRow
];
export type BroadcastChannelMessageWriteEvent<RxDocType> = {
    type: 'event';
    eventBulk?: EventBulk<RxStorageChangeEvent<RxDocumentData<RxDocType>>, any>;
    changelogOperations: ChangelogOperation[];
    info: any;
};
export type BroadcastChannelMessageChanges = {
    type: 'pre-write';
    mightHaveUnprocessedChanges: boolean;
};
export type BroadcastChannelMessage<RxDocType> = BroadcastChannelMessageWriteEvent<RxDocType> | BroadcastChannelMessageChanges;
