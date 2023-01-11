import React from "react";
import "./Home.css";

const Home = () => {
  const portfolioName = ["Britny Lain"];
  return (
    <div>
      <h1 className="home-h1">{portfolioName}</h1>
      <div>
        <h2 className="home-h2">{portfolioName}</h2>
      </div>
    </div>
  );
};

export default Home;
