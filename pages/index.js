import { useEffect } from "react";
import Header from "./_header";
import Hero from "./_hero";
import Alur from "./_alur";
import MengapaKami from "./_mengapa_kami";
import Paket from "./_paket";
import Template from "./_template";
import Contact from "./_contact";
import Footer from "./_footer";

export default function Home() {
  useEffect(() => {
    new WOW().init();
  }, []);
  return (
    <div className="main">
      <Header title="Buat Undangan Pernikahanmu Spesial bersama Undig.id" />
      <Hero />
      <MengapaKami />
      <Alur />
      <Paket />
      <Template />
      <Contact />
      <Footer />
    </div>
  );
}
