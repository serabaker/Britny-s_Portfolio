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
        <h3 className="home-h3">
          <a
            className="a-connet4Vets"
            href="https://d3urubd6wwveok.cloudfront.net/"
          >
            Connect 4 Vets
          </a>
        </h3>

        <div className="home-2">
          <a
            className="a-screenshot"
            href="https://d3urubd6wwveok.cloudfront.net/"
          >
            <img
              src={connet4Vets}
              alt="Connect 4 vets application"
              className="img-1"
            />
          </a>

          <p className="para-2">
            A community sponsorship application aimed at fighting the homeless
            crisis by outsourcing sponsors out in the local community to help
            homeless veterans in-process with the VA. This app's primary goal is
            to in-process homeless veterans through the VA so they can get
            adequate health care, housing, and employment opportunities.
            However, the main struggle is that the Veteran doesn't have access
            to technologies or the basic tools to in-process themselves. That's
            where this application comes in for the rescue. This application
            targets a Sponsor as the main user and they can sponsor up to 4
            veterans at a time, hence the name 'Connect 4 Vets'.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
