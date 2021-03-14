import { Card, Container, Row, Col } from "react-bootstrap";
import ModalImage from "react-modal-image";
import Link from "next/link";

const Template = () => {
  const noHp = "6282286062083";
  const templates = [
    {
      img: "template_one.png",
      title: "Template Satu",
      desc: "Template dengan nuansa penuh cinta berwarna pink.",
      link: "template_one",
    },
    {
      img: "template_two.png",
      title: "Template Dua",
      desc:
        "Template dengan nuansa kehijauan siap memanjakan tamu undangan Anda dengan tampilan yang enak dipandang.",
      link: "template_two",
    },
  ];
  return (
    <section className="template" id="template">
      <img
        src="images/flower.png"
        alt="Flower"
        className="background wow fadeIn"
      />
      <Container>
        <h1 className="title mb-5 rd text-center wow fadeIn">Template</h1>
        <Row>
          {templates.map((item, index) => (
            <Col md="6">
              <Card className="card wow fadeInUp shadow mb-3">
                <div
                  className="mx-auto"
                  style={{ maxWidth: 156, cursor: "zoom-in" }}
                >
                  <ModalImage
                    small={`images/${item.img}`}
                    large={`images/${item.img}`}
                    alt={item.title}
                  />
                </div>
                <Card.Header className="bg-white">
                  <h4 className="pp text-center mb-3">{item.title}</h4>
                </Card.Header>
                <Card.Body>
                  <p className="pp card-text">{item.desc}</p>
                  <div
                    className="d-flex justify-content-center"
                    style={{ gap: 4 }}
                  >
                    <Link href={item.link}>
                      <a href="javascript:;" className="btn btn-primary">
                        <i class="fa fa-eye" aria-hidden="true"></i> Preview
                      </a>
                    </Link>
                    <a
                      href={`https://wa.me/${noHp}?text=Halo Admin Undig, saya ingin memesan ${item.title}.`}
                      target="_blank"
                      className="btn btn-primary"
                    >
                      <i class="fa fa-cart-plus" aria-hidden="true"></i> Pesan
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Template;
