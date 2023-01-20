import React, { useEffect, useState } from "react";
import "./Projects.css";
import connet4Vets from "../../images/Connect4Vets.png";

const Projects = () => {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/project1")
      .then((response) => response.json())
      .then((data) => setBackendData(data));
  }, []);

  return (
    <div id="project" className="project-container">
      <p className="project-home">Projects</p>
      {/* <div className="display-container"> */}
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
          <img className="img-1" src={connet4Vets} alt="connect 4 vets app" />{" "}
        </a>
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
      <div className="list-of-tech">
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
      {/* </div> */}
    </div>
  );
};

export default Projects;
