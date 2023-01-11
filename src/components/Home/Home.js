import React from "react";
import "./Home.css";
import connet4Vets from "../../images/Connect4Vets.png";

const Home = () => {
  const portfolioName = ["Britny Lain"];
  return (
    <>
      <div>
        <h1 className="home-h1">{portfolioName}</h1>

        <p className="project-home">Projects</p>
        <div className="home-2">
          <a href="https://d3urubd6wwveok.cloudfront.net/">
            <img
              src={connet4Vets}
              alt="Connect 4 vets application"
              className="img-1"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
