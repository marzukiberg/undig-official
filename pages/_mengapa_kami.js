import { Card, Col, Container, Row } from "react-bootstrap";

const MengapaKami = () => {
  return (
    <section className="mengapa_kami py-5">
      <Container>
        <div className="text-center">
          <h1 className="text-center mb-5 pb-3 rd wow fadeInUp">
            Kenapa harus Undig?
          </h1>
        </div>
        <Row>
          <Col md="6">
            <img
              src="images/whyus.png"
              alt="Mengapa Kami"
              className="img-fluid wow slideInLeft"
            />
          </Col>
          <Col md="6">
            <div className="why_card">
              <Card className="card shadow mb-3 wow slideInLeft">
                <Card.Body className="text-center">
                  <i class="fa fa-magic" aria-hidden="true"></i>
                  <h2 className="rd">Penuh Animasi</h2>
                  <p className="pp">
                    Undangan Anda akan terlihat bergaya, kami menyajikan
                    template undangan yang animatif sehingga akan terlihat lebih
                    menarik.
                  </p>
                </Card.Body>
              </Card>

              <Card className="card shadow mb-3 wow slideInRight">
                <Card.Body className="text-center">
                  <i class="fa fa-music" aria-hidden="true"></i>
                  <h2 className="rd">Bermusik</h2>
                  <p className="pp text-center">
                    Undangan Anda akan diiringi musik, alunan musik indah siap
                    mengiringi undangan Anda.
                  </p>
                </Card.Body>
              </Card>

              <Card className="card shadow mb-3 wow slideInLeft">
                <Card.Body className="text-center">
                  <i class="fas fa-feather-alt    "></i>
                  <h2 className="rd">Tampilan Cantik</h2>
                  <p className="pp text-center">
                    Jelajahi berbagai template yang cantik dari kami, pilih
                    template Anda dan lakukan pemesanan.
                  </p>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MengapaKami;
