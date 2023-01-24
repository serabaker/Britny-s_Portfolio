import React from "react";
import "./Home.css";
import Projects from "../Projects/Projects";
import Navbar from "../Navbar/Navbar";
import Blog from "../Blog/Blog";
import About from "../About/About";
import Hero from "../Hero/Hero";

const Home = () => {
  // const portfolioName = ["Britny Lain"];
  return (
    <>
      <div id="about">
        {<Navbar />}
        <Hero />
        {/* <h1 className="home-h1">{portfolioName}</h1> */}

        <About />
        {<Projects />}
        {<Blog />}
      </div>
    </>
  );
};

export default Home;
