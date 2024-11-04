import IQuestion from "@/lib/interfaces/IQuestion";
import { NextRequest, NextResponse } from "next/server";

import { dummyQuestionsData } from "../dummyQuestionsData";

export async function GET(request: NextRequest, { params }: { params: {  id: string } }) {
  const { id } = await params;
  const question = dummyQuestionsData.find((question: IQuestion) => question.id === id);

  return NextResponse.json(question);
}