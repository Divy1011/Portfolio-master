import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function EducationCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">

          <ul>
          <li className="about-activity">
              <ImPointRight /><strong className="purple"> MS</strong> in Cybersecurity <strong className="purple"> Rowan University</strong>
            </li>
            <li className="about-activity">
              <ImPointRight /><strong className="purple"> BTech</strong> Information Technology from <strong className="purple"> Silver Oak University</strong>
            </li>
            <li className="about-activity">
              <ImPointRight /><strong className="purple"> Diploma</strong> in Information Technology <strong className="purple"> Gujarat Technological University</strong>
            </li>
            {/* Add more details as needed */}
          </ul>
          <p style={{ textAlign: "justify" }}>
            During my Studies, I gained expertise in various programming languages and technologies, including <strong className="purple">HTML, CSS, JS</strong> which I am currently applying in ReactJS Developement at iCreatewebtech.
          </p>
          {/* Add any additional information or points about your education */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default EducationCard;
