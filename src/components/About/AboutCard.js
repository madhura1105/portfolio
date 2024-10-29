import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Madhura Gondhalekar. </span>
            <br />
            I am pursuing B.Tech in Computer Science and Engineering from Mit Adt University.
            <br />
            <br />
            Apart from coding, some other activities that I enjoy doing!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Dance
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing 
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "#695ff8" }}>
            "Eat. Sleep. Code. Repeat."{" "}
          </p>
          <footer className="blockquote-footer">Madhura</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;