/* eslint-disable @typescript-eslint/no-unsafe-function-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSyncExternalStore } from "react";
import { Action, ReducerType, StateKey, StateKeyOrKeys } from "../types/app.types";


class Store<T extends Record<string, any>> {
  state: T;
  subscribers: Record<keyof T, Function[]>;
  reducers: Record<string, (state: T, action: Action) => T> = {};

  constructor(initialState: T) {
    this.state = { ...initialState };
    this.subscribers = Object.keys(initialState).reduce((acc, key) => {
      acc[key as keyof T] = [];
      return acc;
    }, {} as Record<keyof T, Function[]>);
  }

  getState() {
    return this.state;
  }

  addReducer(
    actionType: ReducerType,
    reducer: (state: T, action: Action) => T
  ) {
    this.reducers[actionType] = reducer;
  }

  subscribe(part: StateKeyOrKeys<T>, subscriber: Function) {
    if (Array.isArray(part)) {
      part.forEach((p) => {
        this.subscribers[p].push(() => subscriber());
      });
    } else {
      this.subscribers[part].push(() => subscriber());
    }
  }

  notifySubscribers(part: StateKeyOrKeys<T>) {
    if (Array.isArray(part)) {
      part.forEach((p) => {
        this.subscribers[p]?.forEach((subscriber) => subscriber());
      });
    } else {
      this.subscribers[part]?.forEach((subscriber) => subscriber());
    }
  }

  triggerDispatch(action: Action) {
    if (!this.state) {
      throw new Error("Store is not initialized.");
    }

    const reducer = this.reducers[action.type];
    if (reducer) {
      this.state = reducer(this.state, action);
      this.notifySubscribers(action.part);
    } else {
      console.error(`No reducer found for action type: ${action.type}`);
    }
  }
}

export let store: Store<any> | null = null;

export function initializeStore<T extends Record<string, any>>(
  initialState: T
): Store<T> {
  if (!store) {
    store = new Store(initialState);
  }
  return store as Store<T>;
}

export function useCustomStore<T extends Record<StateKey<T>, any>>(
  part: StateKeyOrKeys<T>
) {
  if (!store) {
    throw new Error("Store was used before it is initialized.");
  }
  const getSnapshot = () => store?.getState() as T;

  const subscribe = (callback: () => void) => {
    store?.subscribe(part, callback);

    return () => {
      if (Array.isArray(part)) {
        part.forEach((p) => {
          if (store!.subscribers[p] && store?.subscribers[p]) {
            store.subscribers[p] = store?.subscribers[p].filter(
              (sub) => sub !== callback
            );
          }
        });
      } else {
        if (store!.subscribers[part] && store?.subscribers[part]) {
          store.subscribers[part as keyof T] = store?.subscribers[part].filter(
            (sub) => sub !== callback
          );
        }
      }
    };
  };

  return useSyncExternalStore(subscribe, getSnapshot);
}

export function dispatch(action: Action) {
  if (!store) {
    throw new Error("Store was used before it is initialized.");
  }

  store.triggerDispatch(action);
}
