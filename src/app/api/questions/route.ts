import { NextRequest, NextResponse } from "next/server";

import { dummyQuestionsData } from "./dummyQuestionsData";

export async function GET(request: NextRequest) {
  return NextResponse.json(dummyQuestionsData);
}