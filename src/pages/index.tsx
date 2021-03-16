import Head from "next/head";
import { ChallendgeBox } from "../components/ChallengeBox";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { CountdownProvider } from "../contexts/CountdownContext";

import styles from "../styles/components/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | MoveIt</title>
      </Head>

      <ExperienceBar />

      <CountdownProvider>
        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </div>
          <div>
            <ChallendgeBox />
          </div>
        </section>
      </CountdownProvider>
    </div>
  );
}
