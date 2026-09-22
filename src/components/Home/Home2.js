import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" style={{zIndex:2}} id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            Hi! As a passionate XR Developer specializing in AR, VR, MR experience. I gained a lot of experience in immersive applications, game development and interactive web projects, I love pushing the boundaries of technology to create a delightful user experience .
              <br />
              <br />
              over the years I've worked on multiple project such as mini games, firebase and strapi integrations, web socket integration, AR projects using XR interaction and vuforia and VR experience with XR plugin and oculus integration. my journey as freelancer, intern, and full time role, where i had the opportunity to lead projects , collaborate with other teams and constantly expand my technical skills
working with different teams has helped me lot on my communication skills helping me seamlessly collaborate with fellow designers,  developer and client to get bring the idea live. working on a Effective user experience ,optimizing performance or solving complex development challenges , I always driven to create a innovative solutions
              <br/>
              <br/>
              I'm always eager to learn and explore new technologies and collaborating with other teams to build a future of immersive technology
              <br/>
              <br />
              When I’m not immersed in the latest advancements or brainstorming new concepts, you’ll find me diving into competitive games, where strategy and creativity come to life. Join me as I embark on this journey of continuous improvement and imaginative exploration!
              <br />
              <br />
              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/AbhinavVAK"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/abhinav-kanagasabapathi-6910951b5/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/missing__beats/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
