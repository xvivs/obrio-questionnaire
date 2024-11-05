import React from 'react';
import ResultList from './ResultList';

import styles from './page.module.css';

const ResultPage = () => {

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Let&apos;s review what we&apos;ve got?</h2>
      <ResultList />
    </div>
  )
}

export default ResultPage