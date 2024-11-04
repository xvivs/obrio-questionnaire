import IQuestion from "@/lib/interfaces/IQuestion";
import { NextRequest, NextResponse } from "next/server";

// const dummyQuestionData: IQuestion = {
//   id: "1",
//   text: "What is your favorite color?",
//   screenType: "single-select",
//   options: [
//     { id: "1", text: "Red", nextQuestionId: "2" },
//     { id: "2", text: "Blue", nextQuestionId: "3" },
//     { id: "3", text: "Green", nextQuestionId: "4" },
//     { id: "4", text: "Yellow", nextQuestionId: "5" }, 
//   ],
// };

const dummyQuestionData: IQuestion = {
  id: "1",
  text: "So how does it work?",
  subtext: "We analyze hundreds of data points to create your unique astrological blueprint. This is combined with AI to tailor-make your astrological insights, based on your answers. We’re going to change your relationship with astrology.",
  screenType: "info",
};

export async function GET(request: NextRequest, { params }: { params: {  id: string } }) {
  const { id } = await params;

  const dummyResponse: IQuestion = {
    ...dummyQuestionData,
    id
  };

  return NextResponse.json(dummyResponse);
}