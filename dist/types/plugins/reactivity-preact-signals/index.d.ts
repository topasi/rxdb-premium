import { Signal } from "@preact/signals-core";
import { RxReactivityFactory } from 'rxdb/plugins/core';
import type { Subscription } from 'rxjs';
export type PreactSignal<T = any> = Signal<T>;
/**
 * Exported to debug and test
 * the behavior
 */
export declare const PREACT_SIGNAL_STATE: {
    subscribeCount: number;
    signalBySubscription: WeakMap<Subscription, PreactSignal<any>>;
    aliveSubscription: Set<Subscription>;
};
export declare const PreactSignalsRxReactivityFactory: RxReactivityFactory<PreactSignal>;
