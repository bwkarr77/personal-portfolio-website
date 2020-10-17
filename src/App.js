import React, { useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar.jsx";
import { Route, Link, Switch } from "react-router-dom";

// COMPONENTS
import Intro from "./components/Intro.jsx";
import About from "./components/About.jsx";
import Work from "./components/Work.jsx";
import Contact from "./components/Contact.jsx";
import Canvas from "./components/Canvas/Canvas.jsx";

const App = () => {
  useEffect(() => {
    window.onscroll = function () {
      bodySet();
      // stickyNav();
    };

    let body_Id = document.getElementById("body");
    let navBar = document.getElementById('navbar');
    let navSpacer = document.getElementById('navSpacer');
    let pageHeader = document.getElementById('header');
    // let navFiller = document.getElementById('nav-filler')
    let navLoc = navBar.offsetTop;
    let navHeight = navBar.offsetHeight;
    // let bodyY = bodyLocation.offsetTop;
    console.log("body: ", navSpacer.offsetTop, pageHeader.offsetTop, navHeight);

    // body_Id.style.marginTop = `${navHeight+navLoc+100}px`
    navSpacer.style.height = `${1.5 * navHeight}px`
    // navBar.style.top = `${navSpacer.offsetTop-pageHeader.offsetTop}px`
    navBar.style.top = `${navSpacer.offsetTop}px`

    const bodySet = () => {
      if (window.pageYOffset > navSpacer.offsetTop) {
        console.log('NOW!!!')
        // navBar.style.position = "fixed";
        navBar.classList.add("sticky");
        body_Id.classList.add("reached");
      } else {
        navBar.classList.remove("sticky");
        // navBar.style.position = "relative";
        body_Id.classList.remove("reached");
      }
    };
  });

  return (
    // <body className="is-preload">
    <div className="App">
      {/* HERE BEGINS THE 'TRANSFERENCE' FROM THE HTML TEMPLATE....*/}
      {/* Wrapper */}
      <div id="wrapper">
        {/* Header */}
        {/*  */}
        {/* <header id="header">
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
        <div id="navSpacer">a</div>
        </header> */}
        {/*  */}
        <NavBar />
        <div id="body">
          <div className="buffer">
          <Switch>
            <Route exact path={"/Intro"} component={Intro} />
            <Route exact path={"/About"} component={About} />
            <Route exact path={"/Work"} component={Work} />
            <Route exact path={"/Canvas"} component={Canvas} />
            <Route exact path={"/Contact"} component={Contact} />
          </Switch>
          </div>
        </div>
        {/* Footer */}
        <footer id="footer">
          <p className="copyright">
            &copy; Untitled. Start Design: <a href="https://html5up.net/dimension">HTML5 UP</a>, but altered by myself.
          </p>
        </footer>
      </div>

      {/* BG */}
      <div id="bg"></div>
      {/* </body> */}

      {/* .......HERE ENDS THE 'TRANSFERENCE' FROM THE HTML TEMPLATE*/}
    </div>
  );
};

export default App;
