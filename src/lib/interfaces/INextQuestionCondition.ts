export default interface INextQuestionCondition {
  default: string;
  conditional: {
    questionId: string;
    answers: Record<string, string>;
  };
}
