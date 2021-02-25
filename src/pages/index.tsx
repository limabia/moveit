import Head from "next/head";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";

import styles from "../styles/components/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <ExperienceBar />
      <section>
        <div>
          <Profile/>
          <CompletedChallenges/>
        </div>
        <div></div>
      </section>
    </div>
  );
}
