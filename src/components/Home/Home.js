import React from "react";
import "./Home.css";
import Projects from "../Projects/Projects";
import Navbar from "../Navbar/Navbar";
import Blog from "../Blog/Blog";

const Home = () => {
  const portfolioName = ["Britny Lain"];
  return (
    <>
      <div id="home">
        <>{<Navbar />}</>
        <h1 className="home-h1">{portfolioName}</h1>
        <>{<Projects />}</>
        <>{<Blog />}</>
      </div>
    </>
  );
};

export default Home;
