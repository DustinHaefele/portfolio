import React from 'react';
import './AboutMe.css';

export default function AboutMe() {
  return (
    <section id="about-me-section" className="category">
      <div className="row">
        <h2 className="section-title">ABOUT ME</h2>
      </div>
      <div className="row">
        <p id="about-me">
          Hey, I’m Dustin, an aspiring web developer currently based in Athens,
          Georgia. I love coming up with efficient solutions to complex
          problems, traveling the world, good puns, good beer, and Dvorak
          keyboards. <br />
          <br />
          In my first life, I graduated from the University of Nebraska with a
          BS in Chemical Engineering and used it to make manufacturing plants
          more efficient for six years. In my final two years of helping plants
          make wood floors and mayonnaise efficiently, I found my love for
          programming. <br />
          <br />
          I started solving some of the problems at the plant with basic PLC
          programming. After that, I talked my boss into letting me learn how to
          program our 15-foot tall material handling robot. I wrote some new
          robotics programs to help the maintenance department, and of course, I
          taught it how to dance. <br />
          <br />
          When I saw a chance to make work more than just a paycheck I had to do
          something about it. I loved the programming I was doing so much that I
          decided to make a leap and enroll in a Fullstack Development program
          through Thinkful where I worked on a developmont team on multiple
          projects to build Full-Stack web apps with the guidance of industry
          professionals. I am currently travelling across South America working
          on open source projects, personal projects and seeking a full-time
          development position to use the skills I already have and continue to
          learn so I can do my part in making the world a little better place to
          live in one application at a time.
        </p>
      </div>
    </section>
  );
}
