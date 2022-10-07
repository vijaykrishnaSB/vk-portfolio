import React from "react";
import "./Project.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LiveTvIcon from "@mui/icons-material/LiveTv";

const Project = () => {
  return (
    <div className="project-menu">
      <h1>Projects</h1>
      <div className="project-mainmenu">
        <h2>Charitable trust website</h2>
        <h3>Description:</h3>
        <p>
          In this website we can report a problem who want Education related help, care and
          protection. We can register as a Volunteer in it to help people who
          report problem in this website. The main theme of this website is for
          Child Education, Children without parents who are working as
          labour's,parents without Children,Disable people and there education
          purpose.{" "}
        </p>
        <h4>
          Technologies used :
          <span>
            &nbsp;Reactjs,&nbsp;Css,&nbsp;nodejs,&nbsp;Expressjs,&nbsp;MongoDB
          </span>
        </h4>
        <div className="project-logo">
          <a
            href="https://github.com/vijaykrishnaSB/demo-project"
            target="_blank"
          >
            <GitHubIcon sx={{ color: "white", fontSize: 40 }} />
          </a>
          <a href="https://trust-projects.netlify.app/" target="_blank">
            <LiveTvIcon sx={{ color: "white", fontSize: 40 }} />
          </a>
        </div>
      </div>
      {/* <div className="project-mainmenu">
        <h2>Password-Generator</h2>
        <h3>Description:</h3>
        <p>
          In this application we can auto generator safe & secure passwords by
          selection the fields given in the application.The password we can use
          anywhere in our social media apps & websites which we use in our daily
          life.
        </p>
        <h4>
          Technologies used:<span>&nbsp;Reactjs,&nbsp;Css.</span>
        </h4>
        <div className="project-logo">
          <a
            href="https://github.com/vijaykrishnaSB/password-generator"
            target="_blank"
          >
            <GitHubIcon sx={{ color: "white", fontSize: 40 }} />
          </a>
          <a href="https://github.com/vijaykrishnaSB" target="_blank">
            <LiveTvIcon sx={{ color: "white", fontSize: 40 }} />
          </a>
        </div>
      </div> */}
    </div>
  );
};

export default Project;
