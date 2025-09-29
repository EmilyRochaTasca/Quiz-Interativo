import { useEffect, useState } from "react";
import styles from "./QuestionCard.module.css";

export default function QuestionCard({ question, total, index, onAnswer }) {
  const [startTime, setStartTime] = useState(null);

  // Sempre que a questão mudar, reinicia o tempo inicial
  useEffect(() => {
    setStartTime(Date.now());
  }, [index]);

  const handleAnswer = (optionIndex) => {
    const endTime = Date.now();
    const elapsedSeconds = Math.floor((endTime - startTime) / 1000);
    onAnswer(optionIndex, elapsedSeconds);
  };

  return (
    <div className={styles.card}>
      <h2>{question.question}</h2>
      <p className={styles.info}>
        Questão {index + 1} / {total}
      </p>

      <div className={styles.options}>
        {question.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => handleAnswer(i)}
            className={styles.optionButton}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
