import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../scrollup/ScrollToTop";
import ProjectCard from "./ProjectCards";



import "./project.css";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="Fluorescent-Blue">Works </strong>
        </h1>
        <p>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath=""
              title="Movie Tracker"
              description="This is a fully functional eCommerce website that uses React.js + MUI and CSS in the front end and NodeJs and express js in backend and MongoDb as Database."
              ghLink="https://github.com/ArnoSlabbinck/Movie-tracker"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath=""
              title="Visitor Registration"
              description="Building an application where visitors and Employees can visit a building with companies for different purposes."
              ghLink="https://github.com/ArnoSlabbinck/Visitor-Registration"
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath=""
              title="Enigma Emulator"
              description=""
              ghLink="https://github.com/ArnoSlabbinck/Enigma"
            />
          </Col>
         

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath=""
              title="Onboarding Application"
              description="Application onboarding service automating hiring process between new candidates and managers to become employees for the company"
              ghLink="https://github.com/ArnoSlabbinck/FrontOrigins"
            />
          </Col>
        </Row>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default Projects;
