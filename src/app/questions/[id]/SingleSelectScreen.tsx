"use client";

import IQuestion from "@/lib/interfaces/IQuestion";
import { useRouter } from "next/navigation";
import { useState } from "react";

import IQuestionOption from "@/lib/interfaces/IQuestionOption";
import { useAppDispatch } from "@/lib/store/hook";
import ScreenHeader from "./ScreenHeader";
import SingleSelectOption from "./SingleSelectOption";
import styles from "./SingleSelectScreen.module.css";
import IAnswer from "@/lib/interfaces/IAnswer";
import { saveAnswer } from "@/lib/store/slices/questionnaireSlice";

export default function SingleSelectScreen({
  question,
}: {
  question: IQuestion;
}) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [selectedOptionId, setSelectedOptionId] = useState("");
  const onAnswserSelected = (option: IQuestionOption) => {
    setSelectedOptionId(option.id);

    const newAnswer: IAnswer = {
      id: option.id,
      text: option.text,
      questionId: question.id,
      questionText: question.text,
    };

    dispatch(saveAnswer(newAnswer));

    if (option.nextQuestionId) {
      // setTimeout(() => {
        router.push(`/questions/${option.nextQuestionId}`);
      // }, 500);
    } else {
      router.push("/result");
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <ScreenHeader screenType={question.screenType} />
        <main className={styles.main}>
          <h2 className={styles.question}>{question.text}</h2>
          <div className={styles.options}>
            {question.options!.map((option) => (
              <SingleSelectOption
                onClick={() => onAnswserSelected(option)}
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
