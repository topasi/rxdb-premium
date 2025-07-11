import type { MemoryMappedRxStorageInstance } from './memory-mapped-storage-instance.ts';
/**
 * Returns true if had to clean up stuff
 * Returns false if nothing had to be done.
 */
export declare function cleanupNonCleanedBlocks<RxDocType>(instance: MemoryMappedRxStorageInstance<RxDocType>): Promise<boolean>;
