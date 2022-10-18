import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-me">
      <div className="about-mee">
        <h1 className="about-h">About Me</h1>
        <h2 className="about-hh">A bit about me:</h2>
        <p className="about-hhh">
          Hello, my name is SB vijay krishna. I enjoy creating things that live
          on internet, my interest in web development. I am a trained MERN stack
          developer. I gained some knowledge in the field of software and web
          development and still trying to improve my skills more. Believe that
          continuous learning and belief are the key factors for achieving
          personal and professional success. Have the desire to learn and
          develop something new.
        </p>
        <h2 className="about-hh">Previous Experience:</h2>
        <p className="about-hhh">
          {" "}
          Totally i have 4.5 year's experience in 3 national highway projects
          (NHAI) located in different state's listed below :-
        </p>
        <ul className="about-hhh">
          <h2 className="about-company">Rajdeep Buildcon PVT LTD.</h2>
          <ul>
            <li>
              <span>Designation:-</span>&nbsp;Graduate Engineer Trainee(GET){" "}
            </li>
            <li>
              <span>Project:-</span>&nbsp;Rehabilitation & Up gradation of
              existing NH-30 from Rudrampur to Bhadrachalam in the state of
              Telangana 2-lane with paved shoulders (17 kms) & 4-lane (27
              kms) under NHDP Phase-IV on EPC mode.
            </li>
          </ul>
          <h2 className="about-company">
            Lakshmi Infrastructure & Developers India PVT LTD.
          </h2>
          <ul>
            <li>
              <span>Designation:-</span>&nbsp;Junior-Engineer
            </li>
            <li>
              <span>Project:-</span>&nbsp; Up gradation of existing 4-lane to 6-lane in NH-16 from
              kalaparu to Chinna Avutupali (26 kms) including 6-lane bypass for
              Hanuman junction of (6 kms) total design length-32 kms in the
              state of Andhra Pradesh under NHDP Phase-V under Bharatmala
              Pariyojana in EPC mode.
            </li>
          </ul>
          <h2 className="about-company">
            Lakshmi Infrastructure & Developers India PVT LTD..
          </h2>
          <ul>
            <li>
              <span>Designation:-</span>&nbsp;Site-Engineer{" "}
            </li>
            <li>
              <span>Project:-</span>&nbsp;Construction of 6-lane access
              controlled greenfield highway from Dhandhaniya to
              Rajasthan/Gujarat Border Section of NH-754K as a apart of Amristar
              to Jamnagar Economic Corridor in the state of Rajasthan on EPC
              mode under Bharatmala Pariyojana (Phase-I) (AJ/DRGB-package-7).
            </li>
          </ul>
        </ul>
      </div>
    </div>
  );
};

export default About;
