import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bitsOfCode from "../../Assets/Projects/news.png";
import electric from "../../Assets/Projects/ss.png"
import portfolio from "../../Assets/Projects/ss2.png"
import ss3 from "../../Assets/Projects/ss3.png"
import ss4 from "../../Assets/Projects/ss4.png"
import ss5 from "../../Assets/Projects/ss5.png"
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
              imgPath={electric}
              isBlog={false}
              title="Electrical Website"
              description="An electrical website developed in ReactJS using the Material UI template for learning purposes only"
              ghLink="https://github.com/Divy1011/Tirupati-Electrical"
              demoLink="https://tirupati-electricals.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ss4}
              isBlog={false}
              title="Text Utills"
              description="Web-based text editor used for text manipulation tasks such as converting text to upper and lower case, as well as measuring the length of text."
              ghLink="https://github.com/Divy1011/TextUtills"
              demoLink="https://dp-textutills-demo.netlify.app/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title=" Personal Portfolio"
              description="This is my personal portfolio, created by me in ReactJS using a template."
              ghLink="https://github.com/Divy1011/Portfolio-master"
              demoLink="https://divypatel-portfolio.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ss5}
              isBlog={false}
              title="News Monkey"
              description="A demo project for a news app created using the free News API. It features various types of news, including sports, business, entertainment, general, and health. This project serves as a part of my learning process with APIs."
              ghLink="https://github.com/Divy1011/newsapp"
              demoLink="https://newsmonkey-apidemo.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ss3}
              isBlog={false}
              title="Todo App"
              description="This is a Todo list demo project created with Node.js as the backend, utilizing Express APIs. CRUD operations are performed using a MongoDB database. This project serves as a learning experience"
              ghLink="https://github.com/Divy1011/todo-website-demo"
              demoLink="https://divy-demosite.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
