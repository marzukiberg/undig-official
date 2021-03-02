import Head from "next/head";
import { useEffect, useState } from "react";
import Footer from "./footer";
import Acara from "./acara";
import Galeri from "./galeri";
import LoveStory from "./love_story";
import Mempelai from "./mempelai";
import Pembuka from "./pembuka";
import Penutup from "./penutup";
import Peta from "./peta";
import Header from "../header";

export default function index() {
  const [showFooter, setShowFooter] = useState(false);
  return (
    <div className="template_two">
      <Header title="Raihan dan Rahma" />

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
