import IAnswer from "../interfaces/IAnswer";
import IQuestion from "../interfaces/IQuestion";

/**
 * Given a question and the user's answers, returns the content of the question.
 * If the question content is a string, it is returned as is. If it is an array of
 * conditions, the content of the first condition that is met is returned. If no
 * condition is met, a default error message is returned.
 * @param question The question to get the content for
 * @param userAnswers The user's answers
 * @returns The content of the question
 */
export default function getQuestionContent(
  question: IQuestion,
  userAnswers: IAnswer[],
) {
  if (typeof question.content === "string") {
    return question.content;
  }

  for (const condition of question.content) {
    const conditionMet = condition.conditions.every((con) => {
      const userAnswer = userAnswers.find(
        (answer) => answer.questionId === con.questionId,
      );
      return userAnswer?.id === con.answerId;
    });

    if (conditionMet) return condition.content;
  }

  return "Some error occured, please connect our support team. World is not ideal, but we are working on it.";
}
