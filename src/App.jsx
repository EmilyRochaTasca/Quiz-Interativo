import { useState } from "react";
import styles from "./App.module.css";

import Header from "./components/Header";
import QuestionCard from "./components/QuestionCard";
import ScoreBoard from "./components/ScoreBoard";

import questions from "./data/questions";

function App() {
  // índice da questão atual
  const [current, setCurrent] = useState(0);

  // pontuação (quantas acertou)
  const [score, setScore] = useState(0);

  // se o quiz acabou
  const [finished, setFinished] = useState(false);

  // tempos que o usuário levou em cada questão
  const [times, setTimes] = useState([]);

  // chamada sempre que o usuário responde
  const handleAnswer = (optionIndex, elapsedSeconds) => {
    // salva o tempo gasto naquela questão
    setTimes([...times, elapsedSeconds]);

    // se a alternativa marcada é igual à correta, soma 1 ponto
    if (optionIndex === questions[current].correct) {
      setScore((prev) => prev + 1);
    }

    // se ainda tem questão, vai para a próxima
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      setFinished(true);
    }
  };

  // reinicia o quiz
  const restartQuiz = () => {
    setCurrent(0);
    setScore(0);
    setFinished(false);
    setTimes([]);
  };

  return (
    <div className={styles.container}>
      <Header />

      {/* se não terminou o quiz, mostra a questão */}
      {!finished ? (
        <QuestionCard
          question={questions[current]}
          total={questions.length}
          index={current}
          onAnswer={handleAnswer} // callback quando o usuário responde
        />
      ) : (
        // senão mostra o placar
        <ScoreBoard
          score={score}
          total={questions.length}
          times={times}
          onRestart={restartQuiz}
        />
      )}
    </div>
  );
}

export default App;
