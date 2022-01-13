import { BackgroundImageTemplate } from "@/components/atoms";
import { CardMempelai } from "@/components/molecules";
import { ContainerTemplate } from "@/components/organisms";
import Image from "next/image";
import React from "react";

export default function Mempelai() {
  return (
    <section id="mempelai" className="relative">
      <BackgroundImageTemplate src="/templates/1/background/2.png" />

      <ContainerTemplate>
        <div className="header font-roboto space-y-3 text-sm">
          <div className="w-1/2 h-12 block mx-auto relative wow slideInDown">
            <Image
              layout="fill"
              src="/templates/1/embel/bismillah.png"
              alt="Bismillah"
              objectFit="contain"
            />
          </div>
          <p className="wow fadeIn">
            <i>Assalamu’alikum Warahmatullahi Wabaraktuh</i>
            <br />
            Dengan memohon Rahmat dan Ridho Allah SWT, Mohon do’a restu
            Bapak/Ibu/Saudara dalam rangka melangsungkan pernikahan putra putri
            kami:
          </p>
        </div>

        <div className="content space-y-6">
          <CardMempelai
            img={"/templates/1/mempelai/pria.png"}
            name={"Raihan bin Alfajri"}
            parentLabel={"Putra Pertama"}
            parent={["Bapak Alfajri", "Ibu Fitri Ramadhani"]}
          />

          <CardMempelai
            img={"/templates/1/mempelai/wanita.png"}
            name={"Rahma binti Abdullah"}
            parentLabel={"Putri Kedua"}
            parent={["Bapak Abdullah"]}
            reverse
          />
        </div>
      </ContainerTemplate>
    </section>
  );
}
