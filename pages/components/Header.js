import Head from "next/head";
import React, { useEffect } from "react";

export default function Header({ title }) {
  useEffect(() => {
    if (window !== undefined) {
      new WOW().init();
    }
  }, []);
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&family=Great+Vibes&family=Redressed&family=Roboto&family=Quicksand&display=swap"
        rel="stylesheet"
      ></link>

      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      />

      {/* wowjs */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.compat.min.css"
        integrity="sha512-b42SanD3pNHoihKwgABd18JUZ2g9j423/frxIP5/gtYgfBz/0nDHGdY/3hi+3JwhSckM3JLklQ/T6tJmV7mZEw=="
        crossOrigin="anonymous"
      />
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/graingert-wow/1.2.2/wow.min.js"
        integrity="sha512-W0pro5TDSuKuwBag9ERPMdNzd8E5z5p7BmWqMflUsGN+jW3JPrVvE5F5EJXIDk3vX9YYvJ+fZ55grIU9mHzvhw=="
        crossOrigin="anonymous"
      ></script>

      {/* Leaflet */}
      <link rel="stylesheet" href="/vendor/css/leaflet.css" />
      <script src="/vendor/js/leaflet.js"></script>

      {/* Main */}
      <script src="/main.js"></script>
      {/* <script src="/anti-inspect-element.js"></script> */}
    </Head>
  );
}
