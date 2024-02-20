import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Roland Manvelyan </span>
            from <span className="purple"> Los Angeles, California.</span>
            <br />
            I am currently in search for a junior level software developer role.
            <br />
            I thrive in the ever-changing programming landscape, embracing the challenge of learning new tools, editors, programming languages, and frameworks to craft valuable software experiences.
            <br />
            <br />
            I strive to make a positive impact in the world one day through my technological skills of developing software.
          </p>
          <p style={{ color: "rgb(155 126 172)" }}>
            "Every thread of kindness and compassion contributes to a world woven with hope and brightness."{" "}
          </p>
          <footer className="blockquote-footer">Roland Manvelyan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
