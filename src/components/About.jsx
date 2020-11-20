import React from "react";

const About = () => {
  return (
    <div>
      <article id="intro">
        <h2 className="major">Intro</h2>
        <div id="intro-card">
          <img src="images/me.png" alt="my_picture" className="img-main" />
          <div id="intro-text">
            <p>
              Hi! My name is Brett. I am a Full Stack Developer with a
              passionate for creation, building, and troubleshooting usefull
              applications. I have a background in Mechanical Engineering and
              Project Management, which is helpful when it comes to delivering
              large and small scale projects.
            </p>
            <p>
              I am currently living in Chicago. Finished a long term, intensive
              bootcamp that focused on Front-End, Back-End, and Algorithms. By
              the way, check out my <a href="#work">awesome work</a>.
            </p>
          </div>
        </div>
      </article>
      <article id="about">
        <h2 className="major">About Me</h2>
        <p>
          I come from a small town of Carpinteria, CA. Growing up I played
          football, marching band, and a few random recreational activities.
          Eagle Scout, power lifter, weight loss(er), Smash Brothers enthusiast,
          and snacker are adjectives that I've gone by in the past.
        </p>
        <p>
          After high school I spent some time at a city college (SBCC), where I
          dabbled in most scientific fields until I landed on Mechanical
          Engineering. After SBCC I went to Chico State University, where I got
          my bachelors degree in Mechanical Engineering with a minor in
          manufacturing. I have been working as a Mechanical Engineer for the
          past 6 years, and have decided to change career fields to focus on web
          development and computer science.
        </p>
      </article>
    </div>
  );
};

export default About;
