import IAnswer from "@/lib/interfaces/IAnswer";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface QuestionnaireState {
  asnwers: IAnswer[];
}

const initialState: QuestionnaireState = {
  asnwers: [],
};

export const questionnaireSlice = createSlice({
  name: "questionnaire",
  initialState,
  reducers: {
    saveAnswer: (state, action: PayloadAction<IAnswer>) => {
      state.asnwers.push(action.payload);
    },
    resetAnswers: (state) => {
      state.asnwers = [];
    },
  },
  selectors: {
    getAnswers: (state) => state.asnwers
  }
});

export const { saveAnswer, resetAnswers } = questionnaireSlice.actions;
export const { getAnswers } = questionnaireSlice.selectors;

export default questionnaireSlice.reducer;



