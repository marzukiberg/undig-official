import React from "react";
import Animate from "../../components/Animations";

const NamesHolder = ({ pria, wanita }) => {
  return (
    <div className="names_holder">
      <img
        src="template_one/frame-nama.png"
        alt="Frame Nama"
        className="bg_holder img-fluid"
      />
      <div>
        <Animate.Slide right speed={1000}>
          <span className="name_left salsa">{pria}</span>
        </Animate.Slide>
        <span className="and salsa">&</span>
        <Animate.Slide>
          <span className="name_right salsa">{wanita}</span>
        </Animate.Slide>
      </div>
    </div>
  );
};

export default NamesHolder;
