import { BackgroundImageTemplate } from "@/components/atoms";
import { CardMempelai } from "@/components/molecules";
import { ContainerTemplate } from "@/components/organisms";
import Image from "next/image";
import React from "react";

export default function Mempelai() {
  return (
    <section id="mempelai" className="relative">
      <BackgroundImageTemplate src="/templates/3/background/2.png" />

      <ContainerTemplate>
        <div className="header font-roboto space-y-3 text-sm">
          <div className="w-1/2 h-10 block mx-auto relative">
            <Image
              src="/templates/3/embel/bismillah.png"
              alt="Bismillah"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <p>
            <i>Assalamu’alikum Warahmatullahi Wabaraktuh</i>
            <br />
            Dengan memohon Rahmat dan Ridho Allah SWT, Mohon do’a restu
            Bapak/Ibu/Saudara dalam rangka melangsungkan pernikahan putra putri
            kami:
          </p>
        </div>

        <div className="content space-y-6">
          <CardMempelai
            img={"/templates/2/mempelai/pria.png"}
            name={"Raihan bin Alfajri"}
            parentLabel={"Putra Pertama"}
            parent={["Bapak Alfajri", "Ibu Fitri Ramadhani"]}
            themeColor="text-indigo300"
            noBackground
          />
          <CardMempelai
            img={"/templates/2/mempelai/wanita.png"}
            name={"Rahma binti Abdullah"}
            parentLabel={"Putri Kedua"}
            parent={["Bapak Abdullah"]}
            reverse
            themeColor="text-indigo300"
            noBackground
          />
        </div>
      </ContainerTemplate>
    </section>
  );
}
