import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Avatar.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineMedium,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }} data-aos="fade-right">
              <span className="primary-header"> ABOUT </span> ME
            </h1>
            <p className="home-about-body" data-aos="fade-up">
              <br />
              I'm a <i className="primary-header">
                Passionate Web Developer
              </i>{" "}
              who loves solving problems through 
              <br />
              <br />I love to be involved with {" "}
              <i className="primary-header">technology</i> and learning
              new things.
              <br />
              <br /> I see myself specializing in {" "}
              <i className="primary-header">Cloud engineering</i> 
              <br />
              <br />
              Currently my goal is building more{" "}
              <i className="primary-header">projects </i> and gaining more experience
            </p>
          </Col>
          <Col md={4} className="myAvatar">
            <Tilt>
              <img
                data-aos="fade-left"
                src={myImg}
                className="img-fluid"
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1 data-aos="fade-right">
              <span className="primary-header">Contact </span> 
            </h1>
            <p data-aos="fade-left">How to connect with me</p>
            <ul className="home-about-social-links" data-aos="fade-up">
              <li className="social-icons">
                <a
                  href="https://github.com/ArnoSlabbinck"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="github"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://medium.com/@arnoslabbinck"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="medium"
                >
                  <AiOutlineMedium />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:arno.slabbinck@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="email"
                >
                  <AiOutlineMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/arno-slabbinck-3ab714a1/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
