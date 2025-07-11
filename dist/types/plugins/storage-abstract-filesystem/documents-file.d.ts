import { RxDocumentData, RxStorageChangeEvent } from 'rxdb/plugins/core';
import { TaskQueueRunState } from './task-queue.ts';
import { IndexRow, State } from './types.ts';
import { AbstractFileSystemFileHandle, AbstractFileSystemAccessHandle } from './abstract-filesystem.ts';
export declare const DECODER: TextDecoder;
export declare const ENCODER: TextEncoder;
/**
 * Appends the documents json data
 * at the end of the documents file and
 * returns the starPos and endPos of each
 * json part.
 */
export declare function writeDocumentRows<RxDocType>(runState: TaskQueueRunState<RxDocType>, documentFileHandle: AbstractFileSystemFileHandle, events: RxStorageChangeEvent<RxDocumentData<RxDocType>>[]): Promise<[number, number][]>;
/**
 * MUST NOT be async!
 * @hotPath
 */
export declare function getDocumentsJson<RxDocType>(state: State, documentFileAccessHandle: AbstractFileSystemAccessHandle, runState: TaskQueueRunState<RxDocType>, 
/**
 * The index rows of the documents to be found.
 */
indexRows: IndexRow[]): Promise<RxDocumentData<RxDocType>[]>;
export declare const COMMA_AS_UINT8: Uint8Array;
/**
 * Load a pre-build json string
 * which is faster to be send over postMessage() compared
 * to a complex object.
 * MUST NOT be async!
 * @hotPath
 */
export declare function getDocumentsJsonString<RxDocType>(state: State, documentFileAccessHandle: AbstractFileSystemAccessHandle, runState: TaskQueueRunState<RxDocType>, 
/**
 * The index rows of the documents to be found.
 */
indexRows: IndexRow[]): Promise<string>;
export declare function sortCompareIndexRowsByPosition(a: IndexRow, b: IndexRow): 1 | -1 | 0;
export declare function getAverageDocSize(indexRows: IndexRow[], sampleAmount: number): number;
export declare function batchIndexRowReads(indexRows: IndexRow[], maxJumpDocs: number): IndexRow[][];
