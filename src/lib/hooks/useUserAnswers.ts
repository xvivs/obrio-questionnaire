import { useAppSelector } from "../store/hooks";

export default function useUserAnswers() {
  const answers = useAppSelector((state) => state.questionnaire.answers);

  return answers;
}
