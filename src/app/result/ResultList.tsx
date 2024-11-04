'use client';

import { useAppSelector } from '@/lib/store/hook';
import React from 'react';

import styles from './ResultList.module.css';

const ResultList = () => {
  const answers = useAppSelector((state) => state.questionaire.answers);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
      {answers.map((answer) => (
        <div key={answer.text} className={styles.listItem}>
          <h2 key={answer.id}>{answer.questionText}</h2>
          <p>{answer.text}</p>
        </div>
      ))}
      </div>
    </div>
  )
}

export default ResultList;