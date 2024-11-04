"use client";

import IQuestion from "@/lib/interfaces/IQuestion";
import React, { useState } from "react";
import Svg from "next-svg";

import styles from "./SingleSelectScreen.module.css";
import SingleSelectOption from "./SingleSelectOption";
import Image from "next/image";

export default function SingleSelectScreen({
  question,
}: {
  question: IQuestion;
}) {
  const [selectedOptionId, setSelectedOptionId] = useState("");

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
              fill="#333333"
            />
          </svg>
          <div className={styles.logo}></div>
        </header>
        <main className={styles.main}>
          <h2 className={styles.question}>{question.text}</h2>
          <div className={styles.options}>
            {question.options.map((option) => (
              <SingleSelectOption
                onClick={() => setSelectedOptionId(option.id)}
                isActive={option.id === selectedOptionId}
                key={option.id}
                option={option}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
