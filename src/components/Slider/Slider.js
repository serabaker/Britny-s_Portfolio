import React from "react";
import "./Slider.css";
import projectImg from "../../images/Connect4Vets.png";

const Slider = () => {
  return (
    <div className="slider">
      <div className="slide">
        <img
          className="slide-image"
          src={projectImg}
          alt="connect 4 vets application"
        />
        <div className="app-title">
          <a className="slider-a" href="https://d3urubd6wwveok.cloudfront.net/">
            <span>Connect 4 Vets</span>
          </a>
        </div>
      </div>

      <div className="slide">
        <img
          className="slide-image"
          src={projectImg}
          alt="connect 4 vets application"
        />
        <div className="app-title">
          <a className="slider-a" href="https://d3urubd6wwveok.cloudfront.net/">
            <span>Connect 4 Vets</span>
          </a>
        </div>
      </div>
      <div className="slide">
        <img
          className="slide-image"
          src={projectImg}
          alt="connect 4 vets application"
        />
        <div className="app-title">
          <a className="slider-a" href="https://d3urubd6wwveok.cloudfront.net/">
            <span>Connect 4 Vets</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Slider;
