export default interface IQuestionContentCondition {
  conditions: {
    questionId: string;
    answerId: string;
  }[];
  content: string;
}
