import React from "react";
import {
  BackgroundImageTemplate,
  DateFrame,
  CountdownTimer,
} from "@/components/atoms";
import { ContainerTemplate } from "@/components/organisms";
import Image from "next/image";

export default function Acara() {
  return (
    <section id="acara" className="acara">
      <BackgroundImageTemplate src="/templates/2/background/3.png" />

      <ContainerTemplate>
        <h1 className="text-center text-green700 font-salsa text-3xl">
          Rangkaian Acara
        </h1>

        <div className="content space-y-3">
          <Image
            width={400}
            height={32}
            layout="responsive"
            objectFit="cover"
            src="/templates/2/embel/akad.png"
            alt="Akad Nikah"
          />
          <DateFrame
            t1="23"
            t2="Jumat"
            t3="09.00 WIB"
            t4="April"
            t5="2021"
            t6="Kediaman Mempelai Wanita"
            t7="Jalan Bina Keluarga"
            borderClass="border-green-700"
          />
          <Image
            width={400}
            height={32}
            layout="responsive"
            objectFit="cover"
            src="/templates/2/embel/resepsi.png"
            alt="Resepsi Pernikahan Underline"
            className="w-full"
          />
          <DateFrame
            t1="24"
            t2="Sabtu"
            t3="10.00 - 17.00 WIB"
            t4="April"
            t5="2021"
            t6="Kediaman Mempelai Wanita"
            t7="Jalan Bina Keluarga"
            borderClass="border-green-700"
          />
          <CountdownTimer date={"2021-10-24 10:00"} />
        </div>
      </ContainerTemplate>
    </section>
  );
}
