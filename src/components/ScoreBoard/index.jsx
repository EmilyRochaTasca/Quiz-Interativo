import styles from "./ScoreBoard.module.css";

export default  function ScoreBoard ({ score, total, onRestart }){
    return(
        <div className={styles.scoreBoard}>
            <h2>Fim do quiz 👏👏</h2>
            <p>
                Você acertou <strong>{score}</strong> de <strong>{total}</strong> questões
            </p>
            <button onClick={onRestart} className={styles.restartButton}>
                Jogar Novamente 🎮
            </button>
        </div>
    );
}