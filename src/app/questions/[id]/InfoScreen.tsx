import IQuestion from "@/lib/interfaces/IQuestion";
import React from "react";

import styles from './InfoScreen.module.css';

export default function InfoScreen({ question }: { question: IQuestion }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <header className={styles.header}>
        <svg
            width="10"
            height="16"
            className={styles.backButton}
            viewBox="0 0 10 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.5 8L8 0.5L9.05 1.55L2.6 8L9.05 14.45L8 15.5L0.5 8Z"
              fill="#FAFAFA"
            />
          </svg>
          <div className={styles.logo}></div>
        </header>
        <main className={styles.main}>
          <h2 className={styles.question}>{question.text}</h2>
          <p className={styles.description}>{question.subtext}</p>
          <button className={styles.continueButton}>Next</button>
        </main>
      </div>
    </div>
  );
};
