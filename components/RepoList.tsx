/* eslint-disable @next/next/no-img-element */
import { repos } from "@apihero/github";
import { createEndpoint } from "@apihero/react";
import styles from "../styles/Home.module.css";

const useRepoList = createEndpoint(repos.listForUser);

export function RepoList({ username }: { username: string }) {
  const { data, status, error } = useRepoList({
    username,
    type: "owner",
    perPage: 100,
  });

  return (
    <>
      {status === "loading" ? (
        <img
          src="https://media.giphy.com/media/VseXvvxwowwCc/giphy.gif"
          alt="Loading"
          width="150px"
          height="150px"
        />
      ) : status === "error" ? (
        <div>
          <img
            src="https://media.giphy.com/media/Nrzs481LzLEdy/giphy.gif"
            alt="Error"
          />
        </div>
      ) : (
        <div className={styles.grid}>
          {data
            .sort(
              (a, b) => (b.stargazers_count ?? 0) - (a.stargazers_count ?? 0)
            )
            .map((item) => (
              <a
                key={item.id}
                href={item.html_url}
                className={styles.card}
                target="_blank"
                rel="noreferrer"
              >
                <h2>{item.full_name}</h2>
                <p className={styles.star}>⭐️ {item.stargazers_count}</p>
                <p>{item.description}</p>
              </a>
            ))}
        </div>
      )}
    </>
  );
}
