import React from "react";

import { work_details } from "./data/data.jsx";
import "./styling.scss";

const Work = () => {
  return (
    <article id="work">
      <h2 className="major">Work</h2>
      {/* <span className="image main">
        <img src="images/Rusty_Parts.jpg" alt="Rusty_Parts" />
      </span> */}
      <p>{work_details.intro[0]}</p>
      <p>{work_details.intro[1]}</p>
      <p>{work_details.css.text}</p>
      {work_details.css.projects.map((each) => {
        return (
          <a href={each.link} target="_blank" key={each.name}>
            <img src={each.img} alt={each.alt} className="css_image" />
          </a>
        );
      })}
      <p>{work_details.react.text}</p>
      {work_details.react.projects.map((each) => {
        return (
          <div className="projects">
            <a href={each.link} target="_blank" key={each.name}>
              <img src={each.img} alt={each.alt} className="css_image" />
            </a>
            {each.desc}
            Frameworks used:
            <ul>
              {each.frameworks.map((framework) => {
                return <li>{framework}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </article>
  );
};

export default Work;
