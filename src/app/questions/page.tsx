import { redirect } from "next/navigation";
import config from "@/lib/data/questionnaire-config-example.json";

export default async function QuestionsPage() {
  // redirect to start question of the questionnaire
  redirect("/questions/" + config.startQuestionId);
}
