import React from "react";
import "./partners.scss";
import Uni1 from "../../../assets/images/cambridge.png";
import Uni2 from "../../../assets/images/acs.png";
import Uni3 from "../../../assets/images/british.png";
import Uni4 from "../../../assets/images/educare.png";
import Uni5 from "../../../assets/images/waec.png";
import Uni6 from "../../../assets/images/nc.png";

function Partners() {
  return (
    <div>
      <div className="col-md-12 partners-slider  ">
        <div class="slider">
          <div className="slide-track partners-immgs">
            {" "}
            <img className="standard slide" src={Uni1} alt="Scholar" />
            <img className="standard slide" src={Uni2} alt="Scholar" />
            <img className="standard slide" src={Uni3} alt="Scholar" />
            <img className="standard slide" src={Uni4} alt="Scholar" />
            <img className="standard slide" src={Uni5} alt="Scholar" />
            <img className="standard slide" src={Uni6} alt="Scholar" />
            <img className="standard slide" src={Uni1} alt="Scholar" />
            <img className="standard slide" src={Uni2} alt="Scholar" />
            <img className="standard slide" src={Uni3} alt="Scholar" />
            <img className="standard slide" src={Uni1} alt="Scholar" />
            <img className="standard slide" src={Uni2} alt="Scholar" />
            <img className="standard slide" src={Uni3} alt="Scholar" />
            <img className="standard slide" src={Uni4} alt="Scholar" />
            <img className="standard slide" src={Uni5} alt="Scholar" />
            <img className="standard slide" src={Uni6} alt="Scholar" />
            <img className="standard slide" src={Uni1} alt="Scholar" />
            <img className="standard slide" src={Uni2} alt="Scholar" />
            <img className="standard slide" src={Uni3} alt="Scholar" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partners;
