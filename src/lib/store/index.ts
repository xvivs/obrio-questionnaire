import { combineReducers, configureStore } from "@reduxjs/toolkit";
import questionnaireReducer from './slices/questionnaireSlice';
import storage from "./ssr-safe-storage";
import { persistReducer, FLUSH, PAUSE, REHYDRATE, REGISTER, PERSIST, PURGE } from "redux-persist";

const rootReducer = combineReducers({
  questionnaire: questionnaireReducer
});

const persistConfig = {
  key: 'persistedState',
  storage,
  whitelist: ['questionnaire']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const makeStore = () => {
  return configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, PAUSE, REGISTER, REHYDRATE, PERSIST, PURGE]
      }
    })
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];