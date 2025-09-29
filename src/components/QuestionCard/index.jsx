import { useEffect, useState } from "react";
import styles from "./QuestionCard.module.css";

export default function QuestionCard({ question, total, index, onAnswer }) {
  const [startTime, setStartTime] = useState(null);

  // toda vez que muda de questão, salva o horário de início
  useEffect(() => {
    setStartTime(Date.now());
  }, [index]);

  // quando o usuário clicar numa alternativa
  const handleAnswer = (optionIndex) => {
    const endTime = Date.now(); // horário da resposta
    const elapsedSeconds = Math.floor((endTime - startTime) / 1000); // tempo decorrido
    onAnswer(optionIndex, elapsedSeconds); // manda de volta para o App
  };

  return (
    <div className={styles.card}>
      {/* pergunta */}
      <h2>{question.question}</h2>

      {/* número da questão */}
      <p className={styles.info}>
        Questão {index + 1} / {total}
      </p>

      {/* lista de alternativas */}
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
