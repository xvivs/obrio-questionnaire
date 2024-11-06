import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

import styles from './SingleSelectOptionList.module.css';
import SingleSelectOption from './SingleSelectOption';

import { useAppDispatch } from '@/lib/store/hooks';
import useUserAnswers from '@/lib/hooks/useUserAnswers';
import { getNextQuestionId, getQuestionContent } from '@/lib/utils';
import { removeDependentAnswers, saveAnswer } from '@/lib/store/slices/questionnaireSlice';

import IQuestion from '@/lib/interfaces/IQuestion';
import IQuestionOption from '@/lib/interfaces/IQuestionOption';
import IAnswer from '@/lib/interfaces/IAnswer';

const SingleSelectOptionList = ({ question }: { question: IQuestion }) => {
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

    if (
      question.dependentQuestionIds &&
      question.dependentQuestionIds.length > 0
    ) {
      dispatch(removeDependentAnswers(question.dependentQuestionIds));
    }

    dispatch(saveAnswer(newAnswer));
    setSelectedOptionId(option.id);

    if (nextQuestionId) {
      router.push(`/questions/${nextQuestionId}`);
    } else {
      router.push("/questions/result");
    }
  };

  return (
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
  )
}

export default SingleSelectOptionList;