import Image from "next/image";
import {
  BackgroundImageTemplate,
  CountdownTimer,
  DateFrame,
} from "@/components/atoms";
import { ContainerTemplate } from "@/components/organisms";

export default function Acara() {
  return (
    <section id="acara" className="acara relative">
      <BackgroundImageTemplate src="/templates/1/background/3.png" />

      <ContainerTemplate>
        <h1 className="text-center font-salsa text-3xl">Rangkaian Acara</h1>

        <div className="content space-y-3">
          <Image
            width={100}
            height={10}
            layout="responsive"
            objectFit="cover"
            src="/templates/1/embel/akad.png"
            alt="Akad Nikah"
            className="w-full"
          />
          <DateFrame
            t1="23"
            t2="Jumat"
            t3="09.00 WIB"
            t4="April"
            t5="2021"
            t6="Kediaman Mempelai Wanita"
            t7="Jalan Bina Keluarga"
          />
          <Image
            width={100}
            height={10}
            layout="responsive"
            objectFit="cover"
            src="/templates/1/embel/resepsi.png"
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
          />
          <CountdownTimer date={"2021-10-24 10:00"} />
        </div>
      </ContainerTemplate>
    </section>
  );
}
