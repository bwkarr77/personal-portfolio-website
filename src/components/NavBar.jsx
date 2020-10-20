import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    // <div>
      <header id="header">
        <div className="logo">
          <span className="icon fa-gem"></span>
        </div>
        <div className="content">
          <div className="inner">
            <h1>HELLO!!!</h1>
            <p>
              My name is Brett. I'm an engineer by day, Full-Stack Developer by
              night. Welcome to my portfolio page!! Sit awhile and listen.
              <a href="https://html5up.net/license">Creative Commons</a>
              license.
            </p>
          </div>
        </div>
  <div id="navSpacer"></div>
        <nav id="navbar"> 
          <ul>
            <li>
              <Link to={"/"}>Intro</Link>
            </li>
            <li>
              <Link to={"/About"}>About</Link>
            </li>
            <li>
              <Link to={"/Work"}>Work</Link>
            </li>
            <li>
              <Link to={"/Contact"}>Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
  );
};

export default NavBar;
