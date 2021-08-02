import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

export default function Penutup() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const ModalKehadiran = () => (
    <Modal show={show} onHide={handleClose} size="sm" centered>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label htmlFor="kehadiran">Kehadiran</Form.Label>
            <Form.Control type="text" id="kehadiran" />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="nama">Nama</Form.Label>
            <Form.Control type="text" id="nama" />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="ucapan">Ucapan dan Doa</Form.Label>
            <Form.Control as="textarea" type="textarea"></Form.Control>
          </Form.Group>
          <Button block variant="success">
            Kirim Konfirmasi Kehadiran
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
  return (
    <div className="with_scroll">
      <section id="penutup" className="penutup with_frame d-flex flex-column">
        <div className="section_frame mb-5">
          <span className="d-block t1 calibri font-weight-bold mb-3">
            Bagi para tamu undangan diharapkan mengikuti protokol pecegahan
            Covid-19. (Memakai masker dan menjaga jarak fisik)
          </span>
          <p className="d-block t1 calibri mb-3">
            “Dan diantara tanda-tanda kekuasaan-Nya ialah Dia Menciptakan
            untukmu istri-istri, supaya kamu cenderung dan merasa tentram
            kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan sayang.
            Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda
            bagi kaum yang berpikir.” <br /> (Q.S. Ar-Rum : 21) <br />
            Wassalamu’alaikum Warahmatullahi Wabaraktuh
          </p>
          <span className="d-block calibri t1">Turut Berbahagia</span>
          <span className="d-block calibri t1 mb-3">
            Segenap Keluarga Besar
          </span>
          <span className="segoe-print font-weight-bold t2 mb-3 d-block">
            ~ Raihan <span className="text-dark">&</span> Rahma ~
          </span>
          <p className="calibri t3">
            Tekan tombol konfirmasi di bawah ini! Dan pastikan kehadiran kamu
          </p>
          <button
            className="btn btn-transparent px-3 py-1 btn1 calibri mb-3"
            onClick={handleShow}
          >
            Konfirmasi Kehadiran
          </button>
          <span className="t4 bg-transparent shadow calibri d-block mb-3">
            Website Invitation Supported By{' '}
            <span className="text-white">Undig Official</span>
          </span>
          <div className="social-media">
            <a href="#" target="_blank" className="social-icon">
              <img src="/template_one/whatsapp.svg" alt="Whatsapp" />
              <span className="d-block calibri t5">082286062083</span>
            </a>

            <a href="#" target="_blank" className="social-icon">
              <img src="/template_one/instagram.svg" alt="Instagram" />{' '}
              <span className="d-block calibri t5">undig_official</span>
            </a>
          </div>
        </div>
        <ModalKehadiran />
      </section>
    </div>
  );
}
