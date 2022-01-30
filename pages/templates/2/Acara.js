import { CountdownTimer, DateFrame } from "@/components/atoms";
import Image from "next/image";
import React from "react";
import { TemplateWrapper } from "@/components/organisms";

export default function Acara() {
  return (
    <TemplateWrapper backgroundImage="/templates/2/background/3.png">
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
    </TemplateWrapper>
  );
}
