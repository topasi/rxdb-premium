import { TaskQueueRunState } from './task-queue.ts';
import { ChangelogOperation, ChangelogOperationKey } from './types.ts';
import { AbstractFile } from './file-abstraction.ts';
import { IndexState } from './index-state.ts';
import { AbstractFileSystemDirectoryHandle } from './abstract-filesystem.ts';
export type ChangelogFile = AbstractFile<{}, [
    number,
    number,
    ChangelogOperationKey,
    string,
    number,
    number
]>;
export declare function getChangelogFile(dirHandlePromise: Promise<AbstractFileSystemDirectoryHandle>, maxIndexableStringLength: number, jsonPositionSize: number): ChangelogFile;
/**
 * Returns the changelog rows
 * starting with a given changelogRowId
 * Returns all rows from the changelog file,
 * sorted by write time.
 */
export declare function getChangelogOperations<RxDocType>(runState: TaskQueueRunState<RxDocType>, changelogFile: ChangelogFile, indexStates: IndexState<RxDocType>[], startRow?: number): Promise<{
    lastRowId: number;
    operationsByIndexId: Map<number, ChangelogOperation[]>;
}>;
export declare function addChangelogOperations<RxDocType>(runState: TaskQueueRunState<RxDocType>, changelogFile: ChangelogFile, changelogOperations: ChangelogOperation[], maxIndexableStringLength: number): Promise<void>;
