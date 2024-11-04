'use client';

import { AppStore, makeStore } from '@/lib/store';
import React, { useRef } from 'react';
import { Provider } from 'react-redux';
import { type Persistor, persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';


export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const storeRef = useRef<AppStore>();
  const persistorRef = useRef<Persistor>();

  if(!storeRef.current) {
    storeRef.current = makeStore();
    persistorRef.current = persistStore(storeRef.current);
  }

  return (
    <Provider store={storeRef.current}>
      <PersistGate loading={null} persistor={persistorRef.current!}>
        {children}
      </PersistGate>
    </Provider>
  );
}