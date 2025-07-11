import { RxStorage } from 'rxdb/plugins/core';
export * from './rx-storage-instance-sharding.ts';
export * from './sharding-helper.ts';
export * from './sharding-types.ts';
import type { RxStorageShardingIOnstanceCreationOptions, RxStorageShardingSettings, ShardingStorageInternals } from './sharding-types.ts';
export declare function getRxStorageSharding<ParentRxStorageInstanceCreationOptions>(settings: RxStorageShardingSettings): RxStorage<ShardingStorageInternals, RxStorageShardingIOnstanceCreationOptions>;
