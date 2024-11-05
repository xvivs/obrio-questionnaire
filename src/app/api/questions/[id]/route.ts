import IQuestion from "@/lib/interfaces/IQuestion";
import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from 'fs';
import path from 'path';

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  const filePath = path.join(process.cwd(), 'src/lib/data/questionnaire-config-example.json');
  
  try {
    const questionnaireConfig = await fs.readFile(filePath, 'utf8');
    const questions: IQuestion[] = JSON.parse(questionnaireConfig);
    
    const question = questions.find((question) => question.id === id);

    if (!question) {
      return NextResponse.json({ error: 'Question not found' }, { status: 404 });
    }

    return NextResponse.json(question);
  } catch (error) {
    console.error("Error reading questions file:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}