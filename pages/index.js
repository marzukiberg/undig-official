import Head from "next/head";
import Script from "next/script";
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
    <>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/graingert-wow/1.2.2/wow.min.js"
        integrity="sha512-W0pro5TDSuKuwBag9ERPMdNzd8E5z5p7BmWqMflUsGN+jW3JPrVvE5F5EJXIDk3vX9YYvJ+fZ55grIU9mHzvhw=="
        crossOrigin="anonymous"
      />
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
    </>
  );
}
