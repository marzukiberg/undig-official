import Link from "next/link";
import { useEffect } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import Header from "./header";
import Alur from "./_alur";
import Hero from "./_hero";
import MengapaKami from "./_mengapa_kami";

export default function Home() {
  useEffect(() => {
    new WOW().init();
  }, []);
  return (
    <div className="main">
      <Header title="Undig Official" />
      <Hero />
      <MengapaKami />
      <Alur />
      {/* <Row>
        <Col md="6">
          <Card className="mb-3">
            <Card.Img
              src="images/template_one.png"
              className="img-fluid"
              alt="Template 1 Undanga n Digital"
            />
            <Card.Body style={{ pointerEvents: "none" }}>
              <Card.Title>Template 1</Card.Title>
              <Card.Text>
                Template dengan nuansa penuh cinta berwarna pink.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Link href="template_one">
                <Card.Link>
                  <Button block variant="success">
                    Buka Template
                    <i class="fa fa-link" aria-hidden="true"></i>
                  </Button>
                </Card.Link>
              </Link>
            </Card.Footer>
          </Card>
        </Col>
        <Col md="6">
          <Card className="mb-3">
            <Card.Img
              src="images/template_two.png"
              className="img-fluid"
              alt="Template 2 Undangan Digital"
            />
            <Card.Body style={{ pointerEvents: "none" }}>
              <Card.Title>Template 2</Card.Title>
              <Card.Text>
                Template dengan nuansa kehijauan siap memanjakan tamu undangan
                Anda dengan tampilan yang enak dipandang.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Link href="template_two">
                <Card.Link>
                  <Button block variant="success">
                    Buka Template
                    <i class="fa fa-link" aria-hidden="true"></i>
                  </Button>
                </Card.Link>
              </Link>
            </Card.Footer>
          </Card>
        </Col>
      </Row> */}
    </div>
  );
}
