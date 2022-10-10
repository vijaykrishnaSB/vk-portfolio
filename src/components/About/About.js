import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-me">
      <div className="about-mee">
        <h1 className="about-h">About Me</h1>
        <h2 className="about-hh">A bit about me:</h2>
        <p className="about-hhh">
          Hello, My name is vijay krishna SB. I enjoy creating things that live
          on internet,My interest in web development.I am a trained MERN stack
          developer. I gained some knowledge in the field of software and web
          development and still trying to improve my skills more.Believe that
          continuous learning and belief are the key factors for achieving
          personal and professional success. Have the desire to learn and
          develop something new.
        </p>
        <h2 className="about-hh">Previous Experience:</h2>
        <p className="about-hhh">
          {" "}
          Totally i have 4.5 year's Experience in 3 National Highway Projected
          located in different state's listed below:
        </p>
        <ul className="about-hhh">
          <h2 className="about-company">Rajdeep Buildcon PVT LTD.</h2>
          <ul>
            <li>
              <span>Role:-</span>&nbsp;Graduate Engineer Trainee(GET){" "}
            </li>
            <li>
              <span>Project:-</span>&nbsp;NH-30 from Kothagudem to Bhadrachalam
              total 42KM's in Telangan State.
            </li>
          </ul>
          <h2 className="about-company">
            Lakshmi Infrastructure & Developers India PVT LTD.
          </h2>
          <ul>
            <li>
              <span>Role:-</span>&nbsp;Junior-Engineer
            </li>
            <li>
              <span>Project:-</span>&nbsp;NH-16 from Hanuman junction to
              kalaparu total 32KM's in Andhra Pradesh State.
            </li>
          </ul>
          <h2 className="about-company">
            Lakshmi Infrastructure & Developers India PVT LTD..
          </h2>
          <ul>
            <li>
              <span>Role:-</span>&nbsp;Site-Engineer{" "}
            </li>
            <li>
              <span>Project:-</span>&nbsp;Rajasthan/Gujarat Border Section of
              NH-754K as a apart of Amristar to Jamnagar Economic Corridor in
              Rajasthan State.
            </li>
          </ul>
        </ul>
      </div>
    </div>
  );
};

export default About;
