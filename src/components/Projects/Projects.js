import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import popcornpicks from "../../Assets/Projects/popcornpicks.png"


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
              imgPath={popcornpicks}
              isBlog={false}
              title="Popcorn Picks"
              description="Popcorn Picks is the go-to platform for movie enthusiasts to share and discover their favorite films. Tailor your movie-watching experience by creating an account, listing your favorite movies, writing reviews, and engaging in discussions through comments. With a sleek design and functionalities, Popcorn Picks is more than just a movie rating website – it's your personalized cinematic journey."
              ghLink="https://gitlab.com/popcorn-picks/popcorn-picks"
              demoLink="https://popcorn-picks.gitlab.io/popcorn-picks"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
