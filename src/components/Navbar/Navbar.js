import React from "react";
import "./Navbar.css";
import logo from "../../images/Britny Lain-logos.jpeg";

const Navbar = () => {
  // const portfolioName = ["Britny Lain"];

  return (
    <nav className="nav">
      <ul className="nav-ul">
        <li className="nav-li">
          <a className="nav-a" href="#home">
            Home
          </a>
        </li>
        <li id="#about" className="nav-li">
          <a className="nav-a" href="#about">
            About
          </a>
        </li>

        <img className="portfolio-logo" src={logo} alt="britny lain logo" />
        <li id="#projects" className="nav-li">
          <a className="nav-a" href="#project">
            Projects
          </a>
        </li>
        <li className="nav-li">
          <a className="nav-a" href="#blog">
            Blog
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
