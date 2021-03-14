import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

const Contact = () => {
  const [form, setForm] = useState({
    nama: "",
    pesan: "",
  });
  const hp = "6282377364295";
  const send = () => {
    window.open(
      `https://wa.me/${hp}?text=Pengirim+%3A+${form.nama}%0D%0APesan+%3A+${form.pesan}`,
      "_blank"
    );
  };
  return (
    <section className="contact wow fadeInUp" id="contact">
      <Container className="py-5">
        <h1 className="title rd text-center mb-5">Kontak</h1>
        <Form style={{ maxWidth: 540 }} className="mx-auto pp" onSubmit={send}>
          <Form.Group>
            <Form.Control
              className="form-control"
              placeholder="Nama Anda"
              value={form.nama}
              onChange={(event) =>
                setForm({ ...form, nama: event.target.value })
              }
              autoCapitalize
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              className="form-control"
              placeholder="Pesan Anda"
              as="textarea"
              rows="4"
              value={form.pesan}
              onChange={(event) =>
                setForm({ ...form, pesan: event.target.value })
              }
              autoCapitalize
              required
            />
          </Form.Group>
          <Button
            type="submit"
            variant="transparent"
            className="d-block mx-auto px-5 rounded-pill"
          >
            Kirim
          </Button>
        </Form>
      </Container>
    </section>
  );
};

export default Contact;
