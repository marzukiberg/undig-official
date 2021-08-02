import Head from 'next/head';
import React from 'react';

export default function Header({ title }) {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&family=Redressed&family=Roboto&family=Quicksand&display=swap"
        rel="stylesheet"
      ></link>

      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/graingert-wow/1.2.2/wow.min.js"></script>

      {/* Leaflet */}
      <link rel="stylesheet" href="vendor/css/leaflet.css" />
      <script src="vendor/js/leaflet.js"></script>

      <link rel="stylesheet" href="/main.js" />
      {/* <script src="/anti-inspect-element.js"></script> */}
    </Head>
  );
}
