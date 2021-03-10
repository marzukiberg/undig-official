import { Container, Card, Button, Row, Col } from "react-bootstrap";

const Alur = () => {
  return (
    <section className="alur py-5">
      <Container>
        <h1 className="text-center rd mb-5">Alur Pemesanan</h1>
        <Row>
          <Col md="3">
            <Card className="card shadow mb-3 pp wow fadeInUp">
              <Card.Body className="text-center">
                <span className="pp num">1</span>
                <h2 className="rd">Pilih Template</h2>
                <p className="pp">
                  Pilih template yang telah kami sajikan dibawah, pada template
                  terdapat klasifikasi paket dan detail paketnya.
                </p>
                <Card.Link href="#template">
                  <Button>Lihat</Button>
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md="3">
            {" "}
            <Card className="card shadow mb-3 pp wow fadeInUp">
              <Card.Body className="text-center">
                <span className="pp num">2</span>
                <h2 className="rd">Lakukan Pemesanan</h2>
                <p className="pp">
                  Klik '<b>Pesan Sekarang</b>' untuk memesan template yang
                  dipilih, atau lihat template terlebih dahulu dengan mengklik '
                  <b>Preview</b>'.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md="3">
            <Card className="card shadow mb-3 pp wow fadeInUp">
              <Card.Body className="text-center">
                <span className="pp num">3</span>
                <h2 className="rd">Kirimkan Data</h2>
                <p className="pp">
                  Kirimkan data-data pernikahan Anda seperti galeri foto, nama
                  mempelai, cerita cinta, dan lain-lain.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md="3">
            <Card className="card shadow mb-3 pp wow fadeInUp">
              <Card.Body className="text-center">
                <span className="pp num">4</span>
                <h2 className="rd">Bayar & Tunggu Pesanan</h2>
                <p className="pp">
                  Lakukan pembayaran dan tunggu hingga pesanan Anda selesai
                  dikerjakan, kami akan mengirimkan undangan Anda dalam bentuk
                  tautan.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Alur;
