import Link from "next/link";
import { Button, Card, Col, Row } from "react-bootstrap";
import Header from "./header";
export default function Home() {
  return (
    <div>
      <Header title="Undig Official" />
      <main>
        <div className="p-3 mx-auto" style={{ maxWidth: 760 }}>
          <Row>
            <Col md="6">
              <Card className="mb-3">
                <Card.Header className="bg-transparent">
                  <Card.Title>Template 1</Card.Title>
                </Card.Header>
                <Card.Body style={{ pointerEvents: "none" }}>
                  <iframe
                    src="/template_one"
                    frameBorder="0"
                    width="100%"
                    height="640"
                  ></iframe>
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
                <Card.Header className="bg-transparent">
                  <Card.Title>Template 2</Card.Title>
                </Card.Header>
                <Card.Body style={{ pointerEvents: "none" }}>
                  <iframe
                    src="/template_two"
                    frameBorder="0"
                    width="100%"
                    height="640"
                  ></iframe>
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
          </Row>
        </div>
      </main>
    </div>
  );
}
