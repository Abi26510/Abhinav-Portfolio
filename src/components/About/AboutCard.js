import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">ABHINAV </span>
            from <span className="purple"> Tamil Nadu, India.</span>
            <br />
            I am currently employed as a software developer at Devden Creative solutions.
            <br />
            <br/>
            I have completed <span className="purple">B.Voc. Augumented & Virtual Reality</span> in PUSJV.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading books
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Anime
            </li>
          </ul>

          <p style={{ color: "rgb(111 201 236)" }}>
            "Make your wild thoughts be the future Reality!"{" "}
          </p>
          <footer className="blockquote-footer">Abhinav</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
