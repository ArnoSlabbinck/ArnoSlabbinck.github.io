import React from "react";
import Card from "react-bootstrap/Card";
import { AiFillCiCircle } from "react-icons/ai";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0" data-aos="zoom-in">
          <p style={{ textAlign: "justify"}}>
            Hi Everyone, I am <span className="primary-header">Arno Slabbinck</span> from Antwerp, Belgium. I am a computer  graduate and a passionate programmer.
            <br />
            <br /> Currently I work at KBC as a System Engineer
            <br />
            Besides programming I love to do other activities: 
          </p>
          <ul>
            <li className="about-activity">
              < AiFillCiCircle /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              < AiFillCiCircle /> Cloud, Code and Data 
            </li>
            <li className="about-activity">
              < AiFillCiCircle /> Drinking Coffee
            </li>
            
            <li className="about-activity">
              < AiFillCiCircle /> Reading Books
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
