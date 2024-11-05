import IAnswer from "../interfaces/IAnswer";
import IQuestion from "../interfaces/IQuestion";
import IQuestionOption from "../interfaces/IQuestionOption";

/**
 * Given a question and the user's answers, determines the next question to ask.
 *
 * This function first checks if the given option has a `next` property. If it
 * does, that `next` property is returned.
 *
 * Otherwise, if the question has a `next` property, this function checks if
 * that property is an object with a `conditional` property. If it is, this
 * function looks up the user's answer to the question in `conditional.questionId`
 * and returns the question ID in `conditional.answers` that matches the user's
 * answer. If the user's answer is not found in `conditional.answers`, the
 * `default` property is returned.
 *
 * If the question's `next` property is not an object with a `conditional`
 * property, it is assumed to be a string and is returned as is.
 *
 * If the question does not have a `next` property, this function returns `null`.
 *
 * @param question The question to determine the next question for
 * @param userAnswers The user's answers
 * @param selectedOption The option the user selected for the current question
 * @returns The ID of the next question to ask, or `null` if there is no next question
 */
export default function useNextQuestionId(question: IQuestion, userAnswers: IAnswer[], selectedOption?: IQuestionOption): string | null {
  if(selectedOption?.next) {
    return selectedOption.next;
  }
  
  if (question.next) {
    if (typeof question.next === 'object' && question.next.conditional) {
      const conditionalQuestionId = question.next.conditional.questionId;
      const { id: answerId } = userAnswers.find(answer => answer.questionId === conditionalQuestionId)!;

      return question.next.conditional.answers[answerId] || question.next.default;
    } else {
      return question.next as unknown as string;
    }
  }

  return null;
}