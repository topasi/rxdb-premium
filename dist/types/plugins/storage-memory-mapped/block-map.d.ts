export declare class BlockMap<RxDocType> {
    map: Map<string, string>;
    cleanup: Map<string, Set<string>>;
    constructor();
    addCleanup(docId: string, blockId: string): void;
    add(docId: string, blockId: string): void;
    set(docId: string, blockId: string): boolean;
}
