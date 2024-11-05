import { NextResponse } from "next/server";

import { promises as fs } from 'fs';

export async function GET() {
  // Emulating getting config from a database of external API
  const questionnaireConfig = await fs.readFile('./src/lib/data/questionnaire-config-example.json', 'utf8');

  return new NextResponse(questionnaireConfig);
}