import React from "react";
import {
  BackgroundImageTemplate,
  LoveStoryBox,
  LoveStoryVLine,
} from "@/components/atoms";
import { ContainerTemplate } from "@/components/organisms";
import Image from "next/image";

export default function LoveStory() {
  return (
    <section id="love_story" className="love_story relative">
      <BackgroundImageTemplate src="/templates/2/background/4.png" />

      <ContainerTemplate useFrame>
        <div className="header text-center font-roboto space-y-3 text-sm">
          <h1 className="text-center font-segoe text-white text-3xl">
            Love Story
          </h1>
          <div className="w-1/2 h-4 relative mx-auto">
            <Image
              layout="fill"
              objectFit="contain"
              src="/templates/2/embel/underline-3.png"
              alt="Underline 3"
            />
          </div>
          <p>
            “Dan diantara tanda-tanda kekuasaan-Nya ialah Dia Menciptakan
            untukmu istri-istri, supaya kamu cenderung dan merasa tentram
            kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan sayang.
            Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda
            bagi kaum yang berpikir.” <br />
            <strong className="d-block text-center">Q.S. Ar-Rum : 21</strong>
          </p>
        </div>

        <div className="content">
          <div className="space-y-0">
            <div className="grid grid-cols-2 relative gap-x-3">
              <LoveStoryBox year="2018">
                Kami pertama kali bertemu satu sama lain di sebuah acara
                perminatan di kampus. Kami berkenalan menjadi perwakilan dari
                masing-masing divisi.
              </LoveStoryBox>

              <LoveStoryVLine colorClass="bg-green300" />

              <LoveStoryBox year="2020" right>
                Setelah sekian lama tidak bertemu, kami bertemu kembali di suatu
                kegiatan sosial. Kebetulan kami berada dalam lembaga yang sama.
              </LoveStoryBox>
            </div>
            <div className="grid grid-cols-2 relative gap-x-3">
              <LoveStoryBox year="2019">
                Salah satu momen yang tidak diduga-duga, Raihan melamar saya
                dengan langsung menyatakan keinginan kepada orang tua saya. Kami
                pun bersiap untuk membuka lembaran baru dalam kehidupan kami.
              </LoveStoryBox>

              <LoveStoryVLine colorClass="bg-green300" />

              <LoveStoryBox year="2021" right>
                Momen spesial kami dimulai dari titik ini, momen awal kami
                membangun keluarga kecil kami. Semoga Allah SWT menjadikan
                keberkahandalam pernikahan kami.
              </LoveStoryBox>
            </div>
          </div>
        </div>
      </ContainerTemplate>
    </section>
  );
}
