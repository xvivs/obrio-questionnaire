import { AppStore, makeStore } from '@/lib/store';
import React, { useRef } from 'react';
import { Provider } from 'react-redux';

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const storeRef = useRef<AppStore>();

  if(!storeRef.current) {
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}