import Image from "next/image";
import { Button } from "@/components/atoms";

const Hero = () => {
  return (
    <section className="hero bg-white bg-opacity-75">
      <div className="absolute left-0 top-0 w-full h-full object-cover -z-1">
        <Image
          layout="fill"
          src="wedding-table.jpg"
          objectFit="cover"
          alt="Hero"
        />
      </div>
      <div className="container mx-auto min-h-screen table">
        <div className="text-center space-y-6 table-cell align-middle">
          <h1 className="text-6xl font-greatvb lg:text-8xl">Undig.id</h1>
          <p className="font-roboto max-w-lg mx-auto leading-9 text-lg">
            Buat undangan pernikahanmu spesial menggunakan layanan online kami,
            cukup dengan satu link, undang semua kerabat dan teman dekatmu
            dengan mudah.
          </p>

          <a href="#mengapa_kami" className="inline-block">
            <Button classes="bg-pink-500 rounded-full text-white w-40 hover:bg-pink-700 focus:ring duration-300">
              MULAI
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
