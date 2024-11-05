'use client';

import React from 'react';

import styles from './ResultList.module.css';
import useUserAnswers from '@/lib/hooks/useUserAnswers';

const ResultList = () => {
  const answers = useUserAnswers();

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
      {answers.map((answer) => (
        <div key={answer.id} className={styles.listItem}>
          <h2 key={answer.id}>{answer.questionContent}</h2>
          <p>{answer.content}</p>
        </div>
      ))}
      </div>
    </div>
  )
}

export default ResultList;