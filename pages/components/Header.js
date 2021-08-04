import Head from 'next/head';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types'

export default function Header({ title }) {
  useEffect(() => {
    if(window !== undefined){
      new Animations().load()
      new WOW().init()
    }
  }, [])
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

      {/* Leaflet */}
      <link rel="stylesheet" href="/vendor/css/leaflet.css" />
      <script src="/vendor/js/leaflet.js"></script>

      {/* wow js and animate */}
      <link rel="stylesheet" href="/vendor/css/animate.compat.min.css" />
      <script src="/vendor/js/wow.min.js"></script>

      {/* Main */}
      <script src="/main.js"></script>
      {/* <script src="/anti-inspect-element.js"></script> */}
    </Head>
  );
}


Header.propTypes = {
  title: PropTypes.string,
}