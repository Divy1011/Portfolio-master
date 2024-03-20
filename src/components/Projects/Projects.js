import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/todo.png";
import chatify from "../../Assets/Projects/text.png";
import bitsOfCode from "../../Assets/Projects/news.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked for Learning purpose.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Text Utills"
              description="Web-based text editor used for text manipulation tasks such as converting text to upper and lower case, as well as measuring the length of text."
              ghLink="https://github.com/Divy1011/TextUtills"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="News Monkey"
              description="This is a demo project for a news app created using the News API. It features various types of news, including sports, business, entertainment, general, and health. This project serves as a part of my learning process with APIs."
              ghLink="https://github.com/Divy1011/newsapp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Todo App"
              description="This is a Todo list demo project created with Node.js as the backend, utilizing Express APIs. CRUD operations are performed using a MongoDB database. This project serves as a learning experience.t"
              ghLink="https://github.com/Divy1011/todo-website-demo"             
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
