import { RxStorage, RxStorageInstance, RxStorageInstanceCreationParams } from 'rxdb/plugins/core';
export type LocalstorageMetaOptimizerRxStorageSettings = {
    storage: RxStorage<any, any>;
};
export declare function getLocalstorageMetaOptimizerRxStorage(settings: LocalstorageMetaOptimizerRxStorageSettings): RxStorageLocalstorageMetaOptimized;
export declare class RxStorageLocalstorageMetaOptimized implements RxStorage<any, any> {
    settings: LocalstorageMetaOptimizerRxStorageSettings;
    name: string;
    readonly rxdbVersion = "15.30.2";
    constructor(settings: LocalstorageMetaOptimizerRxStorageSettings);
    createStorageInstance<RxDocType>(params: RxStorageInstanceCreationParams<RxDocType, any>): Promise<RxStorageInstance<RxDocType, any, any>>;
}
