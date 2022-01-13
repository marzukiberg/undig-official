import { Router } from "next/router";
import { useState } from "react";
import { PageLoader } from "../components/atoms";
import "../styles/globals.css";
import "../styles/index.min.css";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  const handleLoader = () => setLoading(!loading);

  Router.events.on("routeChangeStart", handleLoader);
  Router.events.on("routeChangeComplete", handleLoader);

  return (
    <>
      {loading ? <PageLoader /> : null}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
