/// <reference types="node" />
import { AbstractFileSystemDirectoryHandle, AbstractFileSystemFileHandle, AbstractFileSystemAccessHandle, AbstractFilesystem, AbstractFilesystemCreateOptions } from '../storage-abstract-filesystem/abstract-filesystem.ts';
import { FileHandle } from 'node:fs/promises';
export declare const RX_STORAGE_NAME_FILESYSTEM_NODE = "filesystem-node";
export declare function getRxStorageFilesystemNode(args: {
    basePath: string;
    inWorker?: boolean;
}): import("../storage-abstract-filesystem/index.ts").RxStorageAbstractFilesystem;
export declare class NodeFilesystem implements AbstractFilesystem {
    readonly basePath: string;
    constructor(basePath: string);
    getDirectory(): Promise<NodeFilesystemDirectory>;
}
export declare class NodeFilesystemDirectory implements AbstractFileSystemDirectoryHandle {
    readonly dirPath: string;
    constructor(dirPath: string);
    getDirectoryHandle(name: string, options: {
        create: boolean;
    }): Promise<AbstractFileSystemDirectoryHandle>;
    getFileHandle(filename: string, options: {
        create: boolean;
    }): Promise<AbstractFileSystemFileHandle>;
    removeEntry(filename: string): Promise<void>;
}
export declare class NodeFilesystemFileHandle implements AbstractFileSystemFileHandle {
    readonly name: string;
    readonly filepath: string;
    readonly options: AbstractFilesystemCreateOptions;
    constructor(name: string, filepath: string, options: AbstractFilesystemCreateOptions);
    createAccessHandle(): Promise<AbstractFileSystemAccessHandle>;
}
export declare class NodeFilesystemFileSyncAccessHandle implements AbstractFileSystemAccessHandle {
    readonly fileHandle: NodeFilesystemFileHandle;
    readonly nodeOpenHandle: FileHandle;
    constructor(fileHandle: NodeFilesystemFileHandle, nodeOpenHandle: FileHandle);
    getWritable(): NodeFilesystemWritable;
    read(from: number, to?: number): Promise<Uint8Array>;
    truncate(len: number): Promise<void>;
    getSize(): Promise<number>;
    close(): Promise<void>;
}
export declare class NodeFilesystemWritable {
    readonly accessHandle: NodeFilesystemFileSyncAccessHandle;
    constructor(accessHandle: NodeFilesystemFileSyncAccessHandle);
    write(data: Uint8Array, options: {
        at: number;
    }): Promise<void>;
    flush(): Promise<void>;
    close(): void;
}
