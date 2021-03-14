import { Container, Row, Col, Card } from "react-bootstrap";

const Paket = () => {
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
  return (
    <section className="paket" id="paket">
      <Container className="py-3">
        <h1 className="rd text-center mb-5 wow fadeIn">Paket</h1>
        <Row>
          <Col md="6">
            <div className="paket_card">
              {paket.map((item, index) => (
                <Card
                  className={`card mb-3 shadow wow ${
                    index == 1 ? "slideInRight" : "slideInLeft"
                  }`}
                >
                  <Card.Body className="px-0">
                    <h3 className="pp text-center font-weight-bold title">
                      {item.title}
                    </h3>
                    <ul
                      className="pp"
                      style={{ listStyle: "none", marginLeft: -13 }}
                    >
                      {item.fitur.map((item2, index2) => (
                        <li>
                          {item2} &nbsp;
                          <i class="fa fa-check" aria-hidden="true"></i>
                        </li>
                      ))}
                    </ul>
                    <h3 className="pp text-center font-weight-bold price">
                      {item.harga}
                    </h3>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Col>
          <Col md="6">
            <div className="d-flex justify-content-center align-items-center h-100">
              <img
                src="images/subscriptions.svg"
                alt="Subcriptions"
                className="img-fluid wow fadeInUp"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Paket;
