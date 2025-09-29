import styles from "./ScoreBoard.module.css";

export default function ScoreBoard({ score, total, times, onRestart }) {
  // soma todos os tempos de cada questão
  const totalTime = times.reduce((acc, t) => acc + t, 0);

  return (
    <div className={styles.scoreBoard}>
      <h2>🎉 Fim do Quiz!</h2>

      {/* mostra pontuação final */}
      <p className={styles.result}>
        Você acertou <strong>{score}</strong> de <strong>{total}</strong> questões.
      </p>

      {/* mostra quanto tempo levou em cada questão */}
      <h3>⏱️ Tempo por questão:</h3>
      <ul className={styles.timeList}>
        {times.map((t, i) => (
          <li key={i}>
            Questão {i + 1}: {t}s
          </li>
        ))}
      </ul>

      {/* mostra tempo total */}
      <p className={styles.totalTime}>
        ⌛ Tempo total: <strong>{totalTime}s</strong>
      </p>

      {/* botão para reiniciar */}
      <button onClick={onRestart} className={styles.restartButton}>
        Jogar Novamente
      </button>
    </div>
  );
}
