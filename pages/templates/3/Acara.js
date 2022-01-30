import { CountdownTimer, DateFrame } from "@/components/atoms";
import { TemplateWrapper } from "@/components/organisms";
import Image from "next/image";
import React from "react";

export default function Acara() {
  return (
    <TemplateWrapper backgroundImage="/templates/3/background/3.png">
      <h1 className="text-center text-indigo700 font-salsa text-3xl">
        Rangkaian Acara
      </h1>

      <div className="content space-y-3">
        <Image
          src="/templates/3/embel/akad.png"
          alt="Akad Nikah"
          width={300}
          height={32}
          layout="responsive"
          objectFit="contain"
        />

        <DateFrame
          borderClass="border-indigo600"
          t1="23"
          t2="Jumat"
          t3="09.00 WIB"
          t4="April"
          t5="2021"
          t6="Kediaman Mempelai Wanita"
          t7="Jalan Bina Keluarga"
        />
        <Image
          src="/templates/3/embel/resepsi.png"
          alt="Resepsi Pernikahan Underline"
          className="w-full"
          width={300}
          height={32}
          layout="responsive"
          objectFit="contain"
        />
        <DateFrame
          borderClass="border-indigo600"
          t1="24"
          t2="Sabtu"
          t3="10.00 - 17.00 WIB"
          t4="April"
          t5="2021"
          t6="Kediaman Mempelai Wanita"
          t7="Jalan Bina Keluarga"
        />
        <CountdownTimer date={"2021-10-24 10:00"} />
      </div>
    </TemplateWrapper>
  );
}
