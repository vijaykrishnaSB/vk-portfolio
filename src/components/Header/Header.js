import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./Header.css";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import EmailIcon from "@mui/icons-material/Email";
import SchoolIcon from "@mui/icons-material/School";
import AppsIcon from "@mui/icons-material/Apps";
import ConstructionIcon from "@mui/icons-material/Construction";
import DehazeIcon from "@mui/icons-material/Dehaze";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <div className="header-container">
      <h1>vijay&nbsp;<span>krishna SB</span></h1>
      {/* <div className="nav-items"> */}
        <ul
          className={isMobile ? "nav-links-mobiles" : "nav-links"}
          onClick={() => setIsMobile(false)}
        >
          <li>
            <Link className="link-item" to="/">
              <HomeIcon />
            </Link>
          </li>
          <li>
            <Link className="link-item" to="/About">
              <InfoIcon />
            </Link>
          </li>
          <li>
            <Link className="link-item" to="/Skill">
              <ConstructionIcon />
            </Link>
          </li>
          <li>
            <Link className="link-item" to="/Project">
              <AppsIcon />
            </Link>
          </li>
          <li>
            <Link className="link-item" to="/Education">
              <SchoolIcon />
            </Link>
          </li>
          <li>
            <Link className="link-item" to="/Contact">
              <EmailIcon />
            </Link>
          </li>
        </ul>
      {/* </div> */}
      <button
        className="mobile-menu-icon"
        onClick={() => setIsMobile(!isMobile)}
      >
        <DehazeIcon sx={{ color: "white" }} />
        {isMobile ? (
          <i className="fas fa-time"></i>
        ) : (
          <i className="fas fa-bar"></i>
        )}
      </button>
    </div>
  );
};

export default Header;
