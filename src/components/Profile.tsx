
import styles from "../styles/components/Profile.module.css";

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/limabia.png" alt='Bianca Lima'></img>
        <div>
            <strong>Bianca Lima Santos</strong>
            <p>
              <img src="icons/level.svg" alt="level"/>
              Level 1
            </p>
        </div>
    </div>
  );
}
