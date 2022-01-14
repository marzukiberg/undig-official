import Head from "next/head";
import { Navbar } from "../components/atoms";
import Alur from "./landing_page/Alur";
import Contact from "./landing_page/Contact";
import Footer from "./landing_page/Footer";
import Hero from "./landing_page/Hero";
import MengapaKami from "./landing_page/MengapaKami";
import Paket from "./landing_page/Paket";
import Template from "./landing_page/Template";

export default function Home() {
  return (
    <div className="wow">
      <Head>
        <title>Buat Undangan Pernikahanmu Spesial bersama Undig.id</title>
      </Head>
      <div>
        <Navbar />
        <Hero />
        <MengapaKami />
        <Alur />
        <Paket />
        <Template />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
