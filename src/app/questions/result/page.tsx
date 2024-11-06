import React from "react";
import Link from "next/link";

import config from "@/lib/data/questionnaire-config-example.json";

import ResultList from "./ResultList";
import styles from "./page.module.css";

const ResultPage = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Let&apos;s review what we&apos;ve got?</h2>
      <ResultList />
      <Link className={styles.link} href={`/questions/${config.startQuestionId}`}>Wanna do it again?</Link>
    </div>
  );
};

export default ResultPage;
