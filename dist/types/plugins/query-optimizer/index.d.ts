import type { FindBestIndexInput, FindBestIndexOutput } from './query-optimizer-types.ts';
export declare function findBestIndex<RxDocType, InstanceCreationOptions>(input: FindBestIndexInput<RxDocType, InstanceCreationOptions>): Promise<FindBestIndexOutput<RxDocType>>;
