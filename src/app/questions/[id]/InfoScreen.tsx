import IQuestion from "@/lib/interfaces/IQuestion";
import React from "react";

import styles from './InfoScreen.module.css';
import ScreenHeader from "./ScreenHeader";

export default function InfoScreen({ question }: { question: IQuestion }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <ScreenHeader screenType={question.screenType} />
        <main className={styles.main}>
          <h2 className={styles.question}>{question.text}</h2>
          <p className={styles.description}>{question.subtext}</p>
          <button className={styles.continueButton}>Next</button>
        </main>
      </div>
    </div>
  );
};
