import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Footer from "./footer";
import Acara from "./template_one/acara";
import Galeri from "./template_one/galeri";
import LoveStory from "./template_one/love_story";
import Mempelai from "./template_one/mempelai";
import Pembuka from "./template_one/pembuka";
import Penutup from "./template_one/penutup";
import Peta from "./template_one/peta";

export default function Home() {
  const [showFooter, setShowFooter] = useState(false);
  return (
    <div className={styles.container}>
      <Head>
        <title>Raihan dan Rahma</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        />
        <script
          src="https://code.jquery.com/jquery-3.5.1.min.js"
          integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
          crossOrigin="anonymous"
        ></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.bundle.min.js"></script>
      </Head>

      <main className="shadow">
        <Pembuka setShowFooter={setShowFooter} />
        <Mempelai />
        <Acara />
        <LoveStory />
        <Galeri />
        <Peta />
        <Penutup />
        <Footer showFooter={showFooter} />
      </main>
    </div>
  );
}
