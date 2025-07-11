import type { MaybePromise } from 'rxdb/plugins/core';
export type AbstractFilesystem = {
    getDirectory(): Promise<AbstractFileSystemDirectoryHandle>;
};
export type AbstractFilesystemCreateOptions = {
    create: boolean;
};
export type AbstractFileSystemDirectoryHandle = {
    getDirectoryHandle(name: string, options: AbstractFilesystemCreateOptions): Promise<AbstractFileSystemDirectoryHandle>;
    getFileHandle(filename: string, options: AbstractFilesystemCreateOptions): Promise<AbstractFileSystemFileHandle>;
    removeEntry(filename: string): Promise<void>;
};
export type AbstractFileSystemFileHandle = {
    name: string;
    createAccessHandle(): Promise<AbstractFileSystemAccessHandle>;
};
export type AbstractFileSystemAccessHandle = {
    read(from: number, to?: number): MaybePromise<Uint8Array>;
    getWritable(): MaybePromise<AbstractFileSystemWritable>;
    truncate(len: number): MaybePromise<void>;
    getSize(): MaybePromise<number>;
    close(): MaybePromise<void>;
};
export type AbstractFileSystemWritable = {
    write(data: Uint8Array, options: {
        at: number;
    }): MaybePromise<void>;
    flush?(): MaybePromise<void>;
    close(): MaybePromise<void>;
};
export type AbstractLock = {
    request(lockId: string, fn: () => Promise<any>): Promise<void>;
};
/**
 * Typescript does not yet know about createSyncAccessHandle()
 */
export type FileSystemSyncAccessHandle = {
    write(data: Uint8Array, options: {
        at: number;
    }): MaybePromise<void>;
    read: (buffer: Uint8Array, opts: any) => any;
    truncate(len: number): MaybePromise<void>;
    getSize: () => Promise<number>;
    flush(): MaybePromise<void>;
    close(): MaybePromise<void>;
};
