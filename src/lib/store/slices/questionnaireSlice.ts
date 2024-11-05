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
        existingAnswer.content = action.payload.content;
        existingAnswer.id = action.payload.id;
      } else {
        state.answers.push(action.payload);
      }
    },
    removeDependentAnswers: (state, action: PayloadAction<string[]>) => {
      state.answers = state.answers.filter(answer => !action.payload.includes(answer.questionId));
    }
  }
});

export const { saveAnswer, removeDependentAnswers } = questionnaireSlice.actions;

export default questionnaireSlice.reducer;



