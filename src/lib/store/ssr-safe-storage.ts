"use client";

import createWebStorage from "redux-persist/lib/storage/createWebStorage";

interface NoopStorageReturnType {
  getItem: (_key: string) => Promise<string>;
  setItem: (_key: string, value: string) => Promise<string>;
  removeItem: (_key: string) => Promise<string>;
}

const createNoopStorage = (): NoopStorageReturnType => {
  return {
    getItem(_key: string): Promise<string> {
      return Promise.resolve(_key);
    },
    setItem(_key: string, value: string): Promise<string> {
      return Promise.resolve(_key + value);
    },
    removeItem(_key: string): Promise<string> {
      return Promise.resolve(_key);
    },
  };
};

const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

export default storage;
