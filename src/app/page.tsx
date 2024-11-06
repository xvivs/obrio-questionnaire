import Link from "next/link";
import styles from "./page.module.css";
import config from "@/lib/data/questionnaire-config-example.json";

export default function Home() {
  return (
    <div className={styles.container}>
      <Link
        className={styles.link}
        href={`/questions/${config.startQuestionId}`}
      >
        Start Quiz
      </Link>
    </div>
  );
}
