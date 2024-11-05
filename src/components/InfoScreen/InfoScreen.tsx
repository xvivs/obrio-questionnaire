'use client';
import IQuestion from "@/lib/interfaces/IQuestion";
import useUserAnswers from "@/lib/hooks/useUserAnswers";
import { getNextQuestionId, getQuestionContent } from "@/lib/utils";

import Link from "next/link";
import ScreenHeader from "../ScreenHeader";
import styles from './InfoScreen.module.css';

export default function InfoScreen({ question }: { question: IQuestion }) {
  const userAnswers = useUserAnswers();
  const content = getQuestionContent(question, userAnswers);
  const nextQuestionId = getNextQuestionId(question, userAnswers);
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <ScreenHeader screenType={question.screenType} />
        <main className={styles.main}>
          <h2 className={styles.content}>{content}</h2>
          {question.subcontent &&
            <p className={styles.subcontent}>{question.subcontent}</p>
          }
          <Link href={`/questions/${nextQuestionId}`} className={styles.link}>Next</Link>
        </main>
      </div>
    </div>
  );
};
