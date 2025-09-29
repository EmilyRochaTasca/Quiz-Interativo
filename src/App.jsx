import { useState } from "react";
import styles from "./App.module.css";

import Header from "./components/Header";
import QuestionCard from "./components/QuestionCard";
import ScoreBoard from "./components/ScoreBoard";

import questions from "./data/questions";

function App() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [times, setTimes] = useState([]); // guarda tempo de cada questão

  const handleAnswer = (optionIndex, elapsedSeconds) => {
    // salva o tempo gasto
    setTimes([...times, elapsedSeconds]);

    // verifica acerto
    if (optionIndex === questions[current].correct) {
      setScore(score + 1);
    }

    // avança
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      setFinished(true);
    }
  };

  const restartQuiz = () => {
    setCurrent(0);
    setScore(0);
    setFinished(false);
    setTimes([]);
  };

  return (
    <div className={styles.container}>
      <Header />
      {!finished ? (
        <QuestionCard
          question={questions[current]}
          total={questions.length}
          index={current}
          onAnswer={handleAnswer}
        />
      ) : (
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
