import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { RepoList } from "../components/RepoList";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [username, setUsername] = useState<string | undefined>(undefined);

  return (
    <div className={styles.container}>
      <Head>
        <title>User’s repositories</title>
        <meta name="description" content="Quickly search GitHub" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <header className={styles.header}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={styles.input}
            placeholder="Enter a GitHub username"
          />
        </header>

        {username && <RepoList username={username} />}
      </main>
    </div>
  );
};

export default Home;
