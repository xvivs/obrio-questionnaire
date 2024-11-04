import IAnswer from "@/lib/interfaces/IAnswer";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface QuestionnaireState {
  answers: IAnswer[];
}

const initialState: QuestionnaireState = {
  answers: [],
};

export const questionnaireSlice = createSlice({
  name: "questionnaire",
  initialState,
  reducers: {
    saveAnswer: (state, action: PayloadAction<IAnswer>) => {
      const existingAnswer = state.answers.find(answer => answer.questionId === action.payload.questionId);
      
      if (existingAnswer) {
        existingAnswer.text = action.payload.text;
        existingAnswer.id = action.payload.id;
      } else {
        state.answers.push(action.payload);
      }
    },
    resetAnswers: (state) => {
      state.answers = [];
    },
  }
});

export const { saveAnswer, resetAnswers } = questionnaireSlice.actions;

export default questionnaireSlice.reducer;



