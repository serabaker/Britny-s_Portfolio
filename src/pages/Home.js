import React from "react";
// import "./Home.css";
import Projects from "../../src/components/Projects/Projects";
import Navbar from "../../src/components/Navbar/Navbar";
import Blog from "../../src/components/Blog/Blog";
import About from "../../src/components/About/About";
import Hero from "../../src/components/Hero/Hero";

const Home = () => {
  return (
    <>
      <div>
        {<Navbar />}
        <Hero />
        {<About />}
        {<Projects />}
        {<Blog />}
      </div>
    </>
  );
};

export default Home;
