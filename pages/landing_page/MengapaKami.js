import { H1Landing } from "@/components/atoms/H1";

import Image from "next/image";
import { Container } from "@/components/organisms";
import { CardLanding } from "@/components/molecules";

const MengapaKami = () => {
  return (
    <section className="mengapa_kami" id="mengapa_kami">
      <Container noFrame>
        <div className="space-y-6">
          <H1Landing>Kenapa harus Undig?</H1Landing>

          <div className="block mx-auto h-64 md:w-1/2 lg:w-96 lg:float-left lg:mr-3 relative">
            <Image
              layout="fill"
              src="whyus.png"
              alt="Mengapa Kami"
              objectFit="contain"
            />
          </div>

          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            <CardLanding className="text-center">
              <div className="text-center text-4xl text-gray-700">
                <i className="fa fa-magic" aria-hidden="true"></i>
              </div>
              <h4 className="text-xl font-quicksand font-bold capitalize">
                Penuh Animasi
              </h4>
              <p className="font-roboto leading-8">
                Undangan Anda akan terlihat bergaya, kami menyajikan template
                undangan yang animatif sehingga akan terlihat lebih menarik.
              </p>
            </CardLanding>
            <CardLanding className="text-center">
              <div className="text-center text-4xl text-gray-700">
                <i className="fa fa-music" aria-hidden="true"></i>
              </div>
              <h4 className="text-xl font-quicksand font-bold capitalize">
                Bermusik
              </h4>
              <p className="font-roboto leading-8">
                Undangan Anda akan diiringi musik, alunan musik indah siap
                mengiringi undangan Anda.
              </p>
            </CardLanding>
            <CardLanding className="text-center">
              <div className="text-center text-4xl text-gray-700">
                <i className="fa fa-music" aria-hidden="true"></i>
              </div>
              <h4 className="text-xl font-quicksand font-bold capitalize">
                Tampilan Cantik
              </h4>
              <p className="font-roboto leading-8">
                Jelajahi berbagai template yang cantik dari kami, pilih template
                Anda dan lakukan pemesanan.
              </p>
            </CardLanding>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MengapaKami;
