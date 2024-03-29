import Image from "next/image";
import { H1Landing } from "@/components/atoms";
import { CardLanding } from "@/components/molecules";
import { Container } from "@/components/organisms";

const Alur = () => {
  return (
    <section className="alur relative" id="alur">
      <div className="absolute w-96 h-96 left-0 top-0 transform -translate-y-12 -z-1">
        <Image layout="fill" src="blob1.svg" alt="Blob" objectFit="contain" />
      </div>
      <Container noFrame>
        <div className="space-y-12">
          <H1Landing>Alur Pemesanan</H1Landing>

          <div className="grid gap-3 gap-y-10 sm:grid-cols-2 md:grid-cols-4 w-full">
            <CardLanding className="text-center relative">
              <div className="text-2xl absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 w-11 h-11 inline-flex items-center justify-center text-white font-poppins rounded-full bg-pink-500">
                1
              </div>
              <h4 className="text-xl font-quicksand font-bold capitalize">
                Pilih Template
              </h4>
              <p className="font-roboto leading-8">
                Pilih template yang telah kami sajikan dibawah, pada template
                terdapat klasifikasi paket dan detail paketnya.
              </p>
              <a
                href="#template"
                className="font-poppins inline-block px-12 py-2 rounded-full bg-white  border border-pink-500 shadow-lg text-pink-500 hover:bg-pink-500 focus:bg-pink-500  transform hover:scale-105 focus:scale-105 duration-300 hover:text-white focus-within:text-white"
              >
                Lihat Template
              </a>
            </CardLanding>
            <CardLanding className="text-center relative">
              <div className="text-2xl absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 w-11 h-11 inline-flex items-center justify-center text-white font-poppins rounded-full bg-pink-500">
                2
              </div>
              <h4 className="text-xl font-quicksand font-bold capitalize">
                Lakukan Pemesanan
              </h4>
              <p className="font-roboto leading-8">
                Klik &apos;<b>Pesan Sekarang</b>&apos; untuk memesan template
                yang dipilih, atau lihat template terlebih dahulu dengan
                mengklik &apos;
                <b>Preview</b>&apos;.
              </p>
            </CardLanding>
            <CardLanding className="text-center relative">
              <div className="text-2xl absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 w-11 h-11 inline-flex items-center justify-center text-white font-poppins rounded-full bg-pink-500">
                3
              </div>
              <h4 className="text-xl font-quicksand font-bold capitalize">
                Kirimkan Data
              </h4>
              <p className="font-roboto leading-8">
                Kirimkan data-data pernikahan Anda seperti galeri foto, nama
                mempelai, cerita cinta, dan lain-lain.
              </p>
            </CardLanding>
            <CardLanding className="text-center relative">
              <div className="text-2xl absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 w-11 h-11 inline-flex items-center justify-center text-white font-poppins rounded-full bg-pink-500">
                4
              </div>
              <h4 className="text-xl font-quicksand font-bold capitalize">
                Bayar & Tunggu Pesanan
              </h4>
              <p className="font-roboto leading-8">
                Lakukan pembayaran dan tunggu hingga pesanan Anda selesai
                dikerjakan, kami akan mengirimkan undangan Anda dalam bentuk
                tautan.
              </p>
            </CardLanding>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Alur;
