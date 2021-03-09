import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/ChallengeBox.module.css";

export function ChallendgeBox() {
  const {activeChallenge , reseatChallenge } = useContext(ChallengesContext);

  return (
    <div className={styles.ChallengeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.ChallengeActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`}></img>
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button 
                type="button" 
                className={styles.ChallengeFailedButton}
                onClick={reseatChallenge}
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
