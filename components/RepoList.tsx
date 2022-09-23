// 1. This function is used to create a React Hook for an API endpoint
import { createEndpoint } from "@apihero/react";
// 2. "repos" is a group of endpoints. We're going to use "listForUser" from it
import { repos } from "@apihero/github";
import styles from "../styles/Home.module.css";

// 3. We create a React Hook for the "listForUser" endpoint,
//    outside of the component so it's only created once
const useRepoList = createEndpoint(repos.listForUser);

export function RepoList({ username }: { username: string }) {
  // 4. The hook has type-safe inputs and outputs
  //    "data" is the response on success, with the correct type
  //    "status" is the status of the request: "loading", "error" or "success"
  //    "error" is the error object if there is an error
  //    TypeScript will force you to pass in the correct inputs, username in this case is required
  const { data, status, error } = useRepoList({
    username,
    type: "owner",
    perPage: 100,
  });

  return (
    <>
      {/* 5. We can use the status to show a loading indicator, an error message, or the data */}
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
          {/* 6. The data is an array of repositories, we sort them so the most popular ones are first */}
          {data
            .sort(
              (a, b) => (b.stargazers_count ?? 0) - (a.stargazers_count ?? 0)
            )
            .map((item) => (
              // 7. Each repository is a card with a link to the repository and some basic info
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
