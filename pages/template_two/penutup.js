import React from "react";

export default function Penutup() {
  const ModalKehadiran = () => (
    <div
      className="modal fade"
      id="modal_kehadiran"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="modelTitleId"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">Body</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <div className="with_scroll">
      <section
        id="penutup"
        className="penutup with_frame d-flex flex-column pb-5"
      >
        <div className="section_frame">
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
          <p className="mb-5 calibri t3">
            Tekan tombol konfirmasi di bawah ini! Dan pastikan kehadiran kamu
          </p>
          <button
            data-toggle="modal"
            data-target="#modal_kehadiran"
            className="btn btn-transparent btn1 calibri mb-3"
          >
            Konfirmasi Kehadiran
          </button>
          <span className="t4 bg-transparent shadow calibri d-block mb-3">
            Website Invitation Supported By{" "}
            <span className="text-white">Undig Official</span>
          </span>
          <div
            className="d-flex social-media justify-content-center"
            style={{ gap: 32 }}
          >
            <a href="#" target="_blank" className="social-icon">
              <img src="template_one/whatsapp.svg" alt="Whatsapp" />
              <span className="d-block calibri t5">082286062083</span>
            </a>

            <a href="#" target="_blank" className="social-icon">
              <img src="template_one/instagram.svg" alt="Instagram" />{" "}
              <span className="d-block calibri t5">undig_official</span>
            </a>
          </div>
        </div>
        <ModalKehadiran />
      </section>
    </div>
  );
}
