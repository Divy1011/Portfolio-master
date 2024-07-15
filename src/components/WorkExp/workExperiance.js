import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function ExperienceCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    {/* <h1>Work Experience</h1> */}
                    <ul>
                        <li className="about-activity">
                            <ImPointRight /><strong className="purple">ReactJs Developer Intern</strong> at <strong className="purple">iCreatewebtech</strong> (October 2024 -May 2024)
                        </li>
                        <li className="about-activity">
                            <ImPointRight /><strong className="purple">FrontEnd Developer Internship</strong> at <strong className="purple">Maxgen Technology</strong> (January 2023 -May 2023)
                        </li>
                        <li className="about-activity">
                            <ImPointRight /><strong className="purple">Java Developer Training</strong> from <strong className="purple">TOPS Technology</strong> ( March 2021 -July 2021)
                        </li>
                        {/* Add more experiences as needed */}
                    </ul>
                    <p style={{ textAlign: "justify" }}>
                        During my work experiences, I have worked on various projects and gained expertise in Web development technologies such as <strong className="purple">ReactJS, HTML, CSS, JavaScript,Bootstrap</strong>.
                    </p>
                    {/* Add any additional information or points about your work experience */}
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default ExperienceCard;
