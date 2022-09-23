import "../styles/globals.css";
import type { AppProps } from "next/app";
import { APIHeroProvider } from "@apihero/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <APIHeroProvider projectKey="cl8eilcvz1244f1fpyq1lll4l">
      <Component {...pageProps} />
    </APIHeroProvider>
  );
}

export default MyApp;
