"use client";

import React from "react";

import styles from "./ResultList.module.css";
import useUserAnswers from "@/lib/hooks/useUserAnswers";
import AnimatePresenceContainer from "@/components/AnimatePresenceContainer";

const ResultList = () => {
  const answers = useUserAnswers();

  return (
    <div className={styles.wrapper}>
      <AnimatePresenceContainer uniqueKey="result-list">
        <div className={styles.container}>
          {answers.map((answer) => (
            <div key={answer.id} className={styles.listItem}>
              <h2 key={answer.id} className={styles.question}>{answer.questionContent}</h2>
              <p>{answer.content}</p>
            </div>
          ))}
        </div>
      </AnimatePresenceContainer>
    </div>
  );
};

export default ResultList;
