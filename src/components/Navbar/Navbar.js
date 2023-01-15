import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <ul className="nav-ul">
        <li className="nav-li">
          <a href="#home">About</a>
        </li>
        <li className="nav-li">
          <a href="#project">Project</a>
        </li>
        <li className="nav-li">
          <a href="#blog">Blog</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
