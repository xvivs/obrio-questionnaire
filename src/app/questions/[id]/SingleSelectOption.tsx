'use client';

import IQuestionOption from '@/lib/interfaces/IQuestionOption';
import React from 'react';
import styles from './SingleSelectOption.module.css';

interface IProps {
  option: IQuestionOption;
  isActive: boolean;
  onClick: () => void;
}

export default function SingleSelectOption ({ option, isActive, onClick }: IProps) { 
  const className = isActive ? `${styles.container} ${styles.active}` : styles.container;

  return (
    <div className={className} onClick={onClick}>
      {option.text}
    </div>
  )
}