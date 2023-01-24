import React from "react";
import "./Navbar.css";

const Navbar = () => {
  const portfolioName = ["Britny Lain"];

  return (
    <nav className="nav">
      <ul className="nav-ul">
        <li className="nav-li">
          <a href="#home">Home</a>
        </li>
        <li className="nav-li">
          <a href="#about">About</a>
        </li>

        <h3 className="portfolio-name">{portfolioName}</h3>
        <li id="#projects" className="nav-li">
          <a href="#project">Projects</a>
        </li>
        <li className="nav-li">
          <a href="#blog">Blog</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
