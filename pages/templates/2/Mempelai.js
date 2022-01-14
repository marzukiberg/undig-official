import { BackgroundImageTemplate } from "@/components/atoms";
import { CardMempelai } from "@/components/molecules";
import { ContainerTemplate } from "@/components/organisms";
import Image from "next/image";

export default function Mempelai() {
  return (
    <section id="mempelai" className="relative">
      <BackgroundImageTemplate src="/templates/2/background/2.png" />

      <ContainerTemplate useFrame>
        <div className="header font-roboto space-y-3 text-sm">
          <div className="w-64 h-8 relative mx-auto">
            <Image
              layout="fill"
              objectFit="contain"
              src="/templates/2/embel/bismillah.png"
              alt="Bismillah"
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
          />
          <CardMempelai
            img={"/templates/2/mempelai/wanita.png"}
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
