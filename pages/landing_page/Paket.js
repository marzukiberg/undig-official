import Image from "next/image";
import { H1Landing } from "@/components/atoms";
import { CardLanding } from "@/components/molecules";
import { Container } from "@/components/organisms";
import classess from "./Paket.module.css";

const paket = [
  {
    title: "Bronze",
    fitur: [
      "Template ditetapkan",
      "Unlimited nama tamu",
      "Penghitung waktu mundur",
      "Navigasi peta",
      "Love story/quotes",
      "Galeri maks. 5 foto",
      "Bebas pilihan musik",
      "Aktif 3 bulan",
      "Teks bisa disesuaikan",
      "Protokol kesehatan",
      "Revisi minor 1x",
    ],
    harga: "Rp. 100,000",
    icon: "bronze.png",
  },
  {
    title: "Silver",
    fitur: [
      "Pilihan 3 template",
      "Penghitung waktu mundur",
      "Navigasi peta",
      "Love story/quotes",
      "Galeri maks. 10 foto",
      "Bebas pilihan musik",
      "Aktif 6 bulan",
      "Teks bisa disesuaikan",
      "Protokol kesehatan",
      "Revisi minor 1x",
      "Revisi mayor 1x",
    ],
    harga: "Rp. 150,000",
    icon: "silver.png",
  },
  {
    title: "Gold",
    fitur: [
      "Bebas memilih template",
      "Penghitung waktu mundur",
      "Navigasi peta",
      "Love story/quotes",
      "Galeri maks. 15 foto",
      "Bebas pilihan musik",
      "Support Video",
      "Support link meeting/zoom atau Youtube",
      "RSVP (konfirmasi kehadiran) dan ucapan via Whatsapp",
      "Suport nomor rekening",
      "Aktif 1 tahun",
      "Teks bisa disesuaikan",
      "Protokol kesehatan",
      "Revisi minor 3x",
      "Revisi mayor 1x",
    ],
    harga: "Rp. 200,000",
    icon: "gold.png",
  },
];
const Paket = () => {
  return (
    <section className="paket" id="paket">
      <Container className="space-y-12">
        <H1Landing className="mb-12">Paket</H1Landing>
        <div className="grid gap-3 gap-y-12 sm:grid-cols-2 md:grid-cols-3">
          {paket.map((item, index) => (
            <CardLanding key={index} className={"space-y-3 relative"}>
              <div className="h-20 w-20 object-contain absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2">
                <Image
                  layout="fill"
                  objectFit="contain"
                  src={`${item.icon}`}
                  alt="Icon"
                />
              </div>
              <h4 className="text-3xl font-quicksand font-bold capitalize text-center">
                {item.title}
              </h4>
              <ul className="space-y-3 md:space-y-1 md:max-h-72 md:overflow-hidden">
                {item.fitur.map((li, index) => {
                  return (
                    <li key={index} className="flex items-center space-x-3">
                      <span>{li}</span>{" "}
                      <i className="fa fa-check" aria-hidden="true"></i>
                    </li>
                  );
                })}
              </ul>
              <div
                className={`group cursor-pointer hidden md:block ${classess.card__paket}`}
              >
                <span className="text-pink-500 block text-center transform">
                  Selengkapnya...
                </span>

                <CardLanding
                  className={`absolute left-1/2 bottom-0 p-6 transform -translate-x-1/2 w-full scale-0 duration-300 group-hover:scale-100 ${classess.card__list}`}
                >
                  <ul className="space-y-3 md:space-y-1 origin-bottom">
                    {item.fitur.map((li, index) => {
                      return (
                        <li key={index} className="flex items-center space-x-3">
                          <span>{li}</span>{" "}
                          <i className="fa fa-check" aria-hidden="true"></i>
                        </li>
                      );
                    })}
                  </ul>
                </CardLanding>
              </div>
              <h4 className="text-xl font-bold font-quicksand text-center bg-pink-500 text-white p-3 rounded">
                {item.harga}
              </h4>
            </CardLanding>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Paket;
