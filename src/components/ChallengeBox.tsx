import styles from "../styles/components/ChallengeBox.module.css";

export function ChallendgeBox() {
  const hasActiveChallenge = true;

  return (
    <div className={styles.ChallengeBoxContainer}>
      {hasActiveChallenge ? (
        <div className={styles.ChallengeActive}>
          <header>Ganhe 400 xp</header>

          <main>
            <img src="icons/body.svg"></img>
            <strong>Novo desafio</strong>
            <p>Levante e faça uma caminhada</p>
          </main>

          <footer>
            <button 
                type="button" 
                className={styles.ChallengeFailedButton}
            >
              Falhei
            </button>

            <button 
                type="button" 
                className={styles.ChallengeSuccededButton}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.ChallengeNotActive}>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg"></img>
            Avance de level completando desafios.
          </p>
        </div>
      )}
    </div>
  );
}