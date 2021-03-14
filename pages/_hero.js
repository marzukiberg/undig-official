import { useEffect, useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

const Hero = () => {
  const [showBg, setShowBg] = useState(false);
  useEffect(() => {
    detectScrolling();
  }, []);
  const detectScrolling = () => {
    window.onscroll = () => {
      const scrollY = window.scrollY;
      const innerHeight = window.innerHeight;
      if (scrollY > innerHeight) {
        setShowBg(true);
      } else {
        setShowBg(false);
      }
    };
  };
  return (
    <section className="hero">
      <Navbar
        bg="transparent"
        expand="lg"
        className={`navbar ${showBg ? "show_bg" : ""}`}
        fixed="top"
      >
        <Container>
          <Navbar.Brand href="#home" className="gv title">
            Undig.id
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto pp text-white">
              <Nav.Link href="#home">Beranda</Nav.Link>
              <Nav.Link href="#alur">Alur Pemesanan</Nav.Link>
              <Nav.Link href="#paket">Paket</Nav.Link>
              <Nav.Link href="#template">Template</Nav.Link>
              <Nav.Link href="#contact">Kontak</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="flex-column-centered main_container">
        <div className="text-center mb-3 wow fadeInUp">
          <h1 className="gv">Undig.id</h1>
          <p className="rd" style={{ maxWidth: 760 }}>
            Buat undangan pernikahanmu spesial menggunakan layanan online kami,
            cukup dengan satu link, undang semua kerabat dan teman dekatmu
            dengan mudah.
          </p>
          <a
            href="#mengapa_kami"
            className="btn btn-primary px-5 rounded-pill pp"
          >
            MULAI
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
