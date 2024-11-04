import IQuestion from '@/lib/interfaces/IQuestion';
import React from 'react';
import SingleSelectScreen from './SingleSelectScreen';
import InfoScreen from './InfoScreen';

export async function generateStaticParams() {
  const questions: IQuestion[] = await fetch('http://localhost:3000/api/questions').then((res) => res.json());

  return questions.map((question) => ({
    id: question.id,
  }))
};

async function getQuestion(id: string): Promise<IQuestion> {
  const question = await fetch(`http://localhost:3000/api/questions/${id}`).then((res) => res.json());

  return question;
}

export default async function QuestionsPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const question = await getQuestion(id);
  
  if(question.screenType === "single-select") return <SingleSelectScreen question={question} />;
  if(question.screenType === 'info') return <InfoScreen question={question} />;

  return <div>Something went wrong, try again later</div>;
};