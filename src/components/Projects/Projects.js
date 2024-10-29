import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import tictactoe from "../../Assets/Projects/tictactoe.png";
import freedomthreads from "../../Assets/Projects/freedomthreads.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tictactoe}
              isBlog={false}
              title="Tic-Tac-Toe"
              description="An online tic-tac-toe game."
              ghLink="https://github.com/madhura1105/tictactoe.git"
              demoLink="https://madhura1105.github.io/tictactoe/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={freedomthreads}
              isBlog={false}
              title="Freedom Threads"
              description="An online shopping website.(Only demo frontend coding)"
              ghLink="https://github.com/madhura1105/Freedom-threads.git"
              demoLink="https://madhura1105.github.io/Freedom-threads/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
