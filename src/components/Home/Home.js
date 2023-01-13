import React from "react";
import "./Home.css";
import Projects from "../Projects/Projects";

const Home = () => {
  const portfolioName = ["Britny Lain"];
  return (
    <>
      <div>
        <h1 className="home-h1">{portfolioName}</h1>
        <>{<Projects />}</>
      </div>
    </>
  );
};

export default Home;
