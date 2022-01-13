import React from 'react';

const CardMempelai = ({
  right = false,
  image,
  alt,
  name,
  from,
  father,
  mother,
}) => {
  return (
    <div
      className={`card mb-3 border-0 bg-transparent ${
        right ? 'holder_right' : 'holder_left'
      }`}
    >
      <div className={`row no-gutters ${right && 'flex-row-reverse'}`}>
        <div className="col-4">
          <img src={image} alt={alt} className="card-img" />
        </div>
        <div className="col-8">
          <div className="card-body pt-0 d-flex flex-column justify-content-center">
            <span className="mempelai_name salsa">{name}</span>
            <img
              src="/templates/1/underline-nama-mempelai.png"
              alt="Underline Nama Mempelai"
              className="img-fluid mempelai_underline"
            />
            <span className="label_ortu font-weight-bold salsa">{from}</span>
            <span className="name_ortu times-new-roman">{father}</span>
            <span className="name_ortu times-new-roman">{mother}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardMempelai;
