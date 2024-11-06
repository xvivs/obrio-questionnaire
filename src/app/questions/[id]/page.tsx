import IQuestion from "@/lib/interfaces/IQuestion";
import React from "react";
import SingleSelectScreen from "@/components/SingleSelectScreen";
import InfoScreen from "@/components/InfoScreen";
import config from "@/lib/data/questionnaire-config-example.json";

// revalidate every 24 hours
export const revalidate = 86400; 

export async function generateStaticParams() {
  const questions = config.questions as IQuestion[];

  return questions.map((question) => ({
    id: question.id,
  }));
}

async function getQuestion(id: string): Promise<IQuestion> {
  const question = config.questions.find((q) => q.id === id) as IQuestion;

  return question;
}

export default async function QuestionsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const question = await getQuestion(id);

  if (question?.screenType === "single-select")
    return <SingleSelectScreen question={question} />;
  if (question?.screenType === "info")
    return <InfoScreen question={question} />;

  return (
    <div>
      Something went wrong, world is not ideal, but we are working on it.
    </div>
  );
}

