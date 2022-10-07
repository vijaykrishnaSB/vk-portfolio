import React from "react";
import "./Home.css";
import image1 from "../../assets/image1.png";
import vijay1 from "../../assets/vijay1.png";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="home-mainmenu">
        <div className="photo-home">
          <img src={vijay1} />
        </div>
        <div className="photo-subname">
          <h1>
            {" "}
            Hello! i am vijay&nbsp;<span>krishna.</span>{" "}
          </h1>
        </div>
        <div className="photo-submenu">
          <p>MERN stack developer</p>
        </div>
        <div className="photo-resume">
          <a href="https://google.com" target="_blank" rel="noreferrer">
            <Button>Resume</Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
