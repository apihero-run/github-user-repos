import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import styles from "../styles/Home.module.css";
// 1. We will create this file in the next step
import { RepoList } from "../components/RepoList";

const Home: NextPage = () => {
  // 2. This state will be used for the input field, and to perform the API call
  const [username, setUsername] = useState<string | undefined>(undefined);

  return (
    <div className={styles.container}>
      <Head>
        <title>User’s repositories</title>
        <meta name="description" content="User's most popular repositories" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <header className={styles.header}>
          {/* 3. We use the username state in the normal React way */}
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={styles.input}
            placeholder="Enter a GitHub username"
          />
        </header>

        {/* 4. The RepoList component is where the magic happens */}
        {username && <RepoList username={username} />}
      </main>
    </div>
  );
};

export default Home;
