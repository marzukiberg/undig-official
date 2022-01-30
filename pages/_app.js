import { Router } from "next/router";
import Script from "next/script";
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
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/graingert-wow/1.2.2/wow.min.js" />
      <Script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js" />
      {loading ? <PageLoader /> : null}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
