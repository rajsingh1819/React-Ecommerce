import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "./style/about.css";

function About() {
  const navigate = useNavigate();
  return (
    <Container>
      <div className="aboutPage">
        <div className="userInfoSection">
          <h6>
            Developed by : <span> Raj Singh</span>
          </h6>
          <h6 className="contactUS">Contact US</h6>
          <div className="usericonSection mb-2">
            <a
              href="https://github.com/rajsingh1819/React-Ecommerce-Project"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/raj-singh-r-s/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={30} />
            </a>
          </div>
          <span>Thank You!</span>
          <button className="page_404_color" onClick={() => navigate("/home")}>
            Go to Home
          </button>
        </div>
      </div>
    </Container>
  );
}

export default About;
