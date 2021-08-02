import { useRef } from 'react';
import Container from '../components/Container';
import H1 from '../components/H1';

const Contact = () => {
  const nama = useRef();
  const pesan = useRef();
  const hp = '6282377364295';
  const send = () => {
    const namaValue = nama.current.value;
    const pesanValue = pesan.current.value;
    if (namaValue.trim() === '' || pesanValue.trim() === '') {
      alert('harap masukkan nama dan pesan');
      return;
    }
    window.open(
      `https://wa.me/${hp}?text=Pengirim+%3A+${namaValue}%0D%0APesan+%3A+${pesanValue}`,
      '_blank'
    );
  };
  return (
    <section className="contact" id="contact">
      <Container className="space-y-6">
        <H1>Kontak</H1>
        <form
          onSubmit={send}
          className="space-y-3 font-poppins max-w-lg mx-auto"
        >
          <div className="space-y-1">
            <label htmlFor="nama">Nama</label>
            <input
              type="text"
              id="nama"
              ref={nama}
              placeholder="Nama Anda"
              className="w-full rounded"
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="pesan">Pesan</label>
            <textarea
              id="pesan"
              rows={5}
              ref={pesan}
              placeholder="Masukkan pesan..."
              className="w-full rounded"
            />
          </div>
          <button
            type="submit"
            className="block text-center py-2 px-6 bg-white border border-gray-500 mx-auto rounded"
          >
            Kirim <i className="fa fa-paper-plane" aria-hidden="true"></i>
          </button>
        </form>
        {/* <Form style={{ maxWidth: 540 }} className="mx-auto pp" onSubmit={send}>
          <Form.Group>
            <Form.Control
              className="form-control"
              placeholder="Nama Anda"
              value={form.nama}
              onChange={(event) =>
                setForm({ ...form, nama: event.target.value })
              }
              autoCapitalize="true"
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
              autoCapitalize="true"
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
        </Form> */}
      </Container>
    </section>
  );
};

export default Contact;
