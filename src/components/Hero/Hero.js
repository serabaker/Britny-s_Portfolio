import React from "react";
import "./Hero.css";
import img from "../../images/heroImg2.jpeg";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-text-wrapper">
        {/* <h1 className="hero1-h1"> I'm Britny</h1> */}

        <h2 className="hero2-h2">
          Web developer and Marine Veteran specializing in assisting small/mid
          sized bussiness owners as they transition their services to online
          platforms. For more information, visit the{" "}
          <span>
            <a className="hero-a" href="#contact">
              Contact Page
            </a>
          </span>
          .
        </h2>
      </div>
      <div className="img-container">
        <h1 className="hero1-h1"> I'm Britny</h1>
        <img className="hero-img" src={img} alt="Britny" />
      </div>
    </div>
  );
};

export default Hero;
