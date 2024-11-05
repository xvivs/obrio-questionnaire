"use client";

import { useAppDispatch } from "@/lib/store/hooks";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { removeDependentAnswers, saveAnswer } from "@/lib/store/slices/questionnaireSlice";
import { getNextQuestionId, getQuestionContent } from "@/lib/utils";

import IAnswer from "@/lib/interfaces/IAnswer";
import IQuestion from "@/lib/interfaces/IQuestion";
import IQuestionOption from "@/lib/interfaces/IQuestionOption";

import useUserAnswers from "@/lib/hooks/useUserAnswers";
import ScreenHeader from "../ScreenHeader/ScreenHeader";
import SingleSelectOption from "./SingleSelectOption";
import styles from "./SingleSelectScreen.module.css";

export default function SingleSelectScreen({
  question,
}: {
  question: IQuestion;
}) {
  const [selectedOptionId, setSelectedOptionId] = useState("");
  const router = useRouter();
  const dispatch = useAppDispatch();
  const userAnswers = useUserAnswers();
  const questionContent = getQuestionContent(question, userAnswers);

  const onAnswserSelected = (option: IQuestionOption) => {
    const nextQuestionId = getNextQuestionId(question, userAnswers, option);
    const newAnswer: IAnswer = {
      id: option.id,
      content: option.content,
      questionId: question.id,
      questionContent,
    };

    if(question.dependentQuestionIds && question.dependentQuestionIds.length > 0) {
      dispatch(removeDependentAnswers(question.dependentQuestionIds));
    }

    dispatch(saveAnswer(newAnswer));
    setSelectedOptionId(option.id);
    
    if(nextQuestionId) {
      router.push(`/questions/${nextQuestionId}`) 
    } else {
      router.push("/questions/result");
    } 
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <ScreenHeader screenType={question.screenType} />
        <main className={styles.main}>
          <h2 className={styles.content}>{questionContent}</h2>
          {question.subcontent && <p className={styles.subcontent}>{question.subcontent}</p>}
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
};
