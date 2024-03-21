import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Divy Patel </span>
            from <span className="purple"> Ahmedabad, India.</span>
            <br />
            I am currently ReactJs Developer Intern at iCreatewebtech.
            <br />
            For more details please go through my resume from top right corner
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Learning is a treasure that is following me everywhere."{" "}
          </p>
          <footer className="blockquote-footer">Divy</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
