import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact me</h1>
      <div className="contact-title">
        <p>
          If you would like to get in touch with me, feel free to send me an
          email at vijaysb0022@gmail.com{" "}
        </p>
      </div>
      <div className="photo-icons">
        <a
          href="https://www.linkedin.com/in/vijay-krishna-3766091b8/"
          target="_blank"
        >
          <LinkedInIcon sx={{ color: "inherit", fontSize: 40 }} />
        </a>
        <a href="https://github.com/vijaykrishnaSB" target="_blank">
          <GitHubIcon sx={{ color: "white", fontSize: 40 }} />
        </a>
      </div>
    </div>
  );
};

export default Contact;
