import { configureStore } from "@reduxjs/toolkit";
import questionaireReducer from './slices/questionnaireSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      questionaire: questionaireReducer
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];