import React, { useEffect, useState } from "react";
import "./Projects.css";
import connet4Vets from "../../images/Connect4Vets.png";
import weatherproject2 from "../../images/weatherproject2.png";
import opalsorganic from "../../images/opalsorganic.png";
import Slider from "../Slider/Slider";

const Projects = () => {
  // const [backendData, setBackendData] = useState([{}]);

  // useEffect(() => {
  //   fetch("/project1")
  //     .then((response) => response.json())
  //     .then((data) => setBackendData(data));
  // }, []);

  let myIndex = 0;

  const carousel = () => {
    let i;
    let x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {
      myIndex = 1;
    }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 2000); // Change image every 2 seconds
  };
  return (
    <div id="project" className="project-container">
      {/* <div className="container-name"> */}
      <h1 className="project-h1">Projects</h1>
      {/* </div> */}

      {/* <>{<Slider />}</> */}
      {/* <div className="img-section"> */}
      <img
        className="mySlides"
        src={connet4Vets}
        alt="connect 4 Vets landing page"
      />
      <img
        className="mySlides"
        alt="weather app landing page"
        src={weatherproject2}
      />
      <img
        className="mySlides"
        alt="opals organic landing "
        src={opalsorganic}
      />
      {/* </div> */}
      {/* <div className="cards">
        <div className="project-img">
          <img className="img-1" src={connet4Vets} alt="connect 4 vets app" />
        </div>
        <div className="project-title">
          <a
            className="a-connet4Vets"
            href="https://d3urubd6wwveok.cloudfront.net/"
          >
            Connect 4 Vets
          </a>
        </div>
        <div className="project-text">
          {typeof backendData.projects === "undefined" ? (
            <p>Loading...</p>
          ) : (
            backendData.projects.map((projects, key) => (
              <p className="para-2" key={key}>
                {projects}
              </p>
            ))
          )}
        </div>
        <div className="tech-list">
          <ul className="project-ul-list">
            <li className="project-li-list">
              Front End created with: Mui | React.js(with Vite) | Tailwind CSS |
              Visual Studio Code
            </li>
            <li className="project-li-list">
              Backend created with: AWS Amplify Hosting | AWS S3 | Graphql
            </li>
            <li className="project-li-list"> Version Control: Github</li>
          </ul>
        </div>
      </div>

      <div className="cards">
        <div className="project-img">
          <img className="img-1" src={connet4Vets} alt="connect 4 vets app" />
        </div>
        <div className="project-title">
          <a
            className="a-connet4Vets"
            href="https://d3urubd6wwveok.cloudfront.net/"
          >
            Connect 4 Vets
          </a>
        </div>
        <div className="project-text">
          {typeof backendData.projects === "undefined" ? (
            <p>Loading...</p>
          ) : (
            backendData.projects.map((projects, key) => (
              <p className="para-2" key={key}>
                {projects}
              </p>
            ))
          )}
        </div>
        <div className="tech-list">
          <ul className="project-ul-list">
            <li className="project-li-list">
              Front End created with: Mui | React.js(with Vite) | Tailwind CSS |
              Visual Studio Code
            </li>
            <li className="project-li-list">
              Backend created with: AWS Amplify Hosting | AWS S3 | Graphql
            </li>
            <li className="project-li-list"> Version Control: Github</li>
          </ul>
        </div>
      </div>
      <div className="cards">
        <div className="project-img">
          <img className="img-1" src={connet4Vets} alt="connect 4 vets app" />
        </div>
        <div className="project-title">
          <a
            className="a-connet4Vets"
            href="https://d3urubd6wwveok.cloudfront.net/"
          >
            Connect 4 Vets
          </a>
        </div>
        <div className="project-text">
          {typeof backendData.projects === "undefined" ? (
            <p>Loading...</p>
          ) : (
            backendData.projects.map((projects, key) => (
              <p className="para-2" key={key}>
                {projects}
              </p>
            ))
          )}
        </div>
        <div className="tech-list">
          <ul className="project-ul-list">
            <li className="project-li-list">
              Front End created with: Mui | React.js(with Vite) | Tailwind CSS |
              Visual Studio Code
            </li>
            <li className="project-li-list">
              Backend created with: AWS Amplify Hosting | AWS S3 | Graphql
            </li>
            <li className="project-li-list"> Version Control: Github</li>
          </ul>
        </div>
      </div> */}

      {/* <p className="project-home">Projects</p>
      <div className="display-container">
        <title className="home-h3">
          <a
            className="a-connet4Vets"
            href="https://d3urubd6wwveok.cloudfront.net/"
          >
            Connect 4 Vets
          </a>
        </title>
       
        <a
          className="a-screenshot"
          href="https://d3urubd6wwveok.cloudfront.net/"
        >
          {" "}
        </a>
       

        <div className="list-of-tech">
          
        </div>
      </div> */}
    </div>
  );
};

export default Projects;
