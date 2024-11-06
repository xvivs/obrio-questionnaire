"use client";

import IQuestion from "@/lib/interfaces/IQuestion";
import useUserAnswers from "@/lib/hooks/useUserAnswers";
import { getQuestionContent } from "@/lib/utils";

import AnimatePresenceContainer from "../AnimatePresenceContainer";
import ScreenHeader from "../ScreenHeader/ScreenHeader";
import SingleSelectOptionList from "./SingleSelectOptionList";
import styles from "./SingleSelectScreen.module.css";

export default function SingleSelectScreen({
  question,
}: {
  question: IQuestion;
}) {
  const userAnswers = useUserAnswers();
  const questionContent = getQuestionContent(question, userAnswers);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <ScreenHeader screenType={question.screenType} />
          <AnimatePresenceContainer uniqueKey={question.id}>
            <main className={styles.main}>
              <h2 className={styles.content}>{questionContent}</h2>
              {question.subcontent && (
                <p className={styles.subcontent}>{question.subcontent}</p>
              )}
              <SingleSelectOptionList question={question} />
            </main>
        </AnimatePresenceContainer>
      </div>
    </div>
  );
}
