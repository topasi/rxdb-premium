import { FilledMangoQuery, RxDocumentData, RxJsonSchema } from 'rxdb/plugins/core';
import { ShardingPreparedQuery } from './sharding-types';
/**
 * Returns the index of the shard
 * which the given primaryKey value
 * is assigned to.
 */
export declare function getShardIndex(shardInstancesAmount: number, documentId: string): number;
/**
 * TODO import this from rxdb/utils
 */
export declare function hashStringToNumber(str: string): number;
/**
 * @link https://stackoverflow.com/a/48147806/3443137
 */
export declare function mergeSortedArray<T>(a: T[], b: T[], sortComparator: (a: T, b: T) => 1 | -1): T[];
export declare function prepareShardingQuery<RxDocType>(schema: RxJsonSchema<RxDocumentData<RxDocType>>, mutateableQuery: FilledMangoQuery<RxDocType>): ShardingPreparedQuery<RxDocType>;
