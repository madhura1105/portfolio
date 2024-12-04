import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/self.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={8} className="home-about-description">
                    <h1 style={{ fontsize: "2.6em" }}>
                        I'LL <span className="home-about-section"> INTRODUCE </span> MYSELF!!
                    </h1>
                    <p className="home-about-body">
                        I'm a coding enthusiast, working on my skills in coding and designing,
                        to become a web developer.
                        <br/>
                        <br/> I am good in basics like
                        <i>
                            <b className="purple">  Javascript, HTML&CSS, Python, SQL. </b>
                        </i>
                        <br />
                        <br />
              Whenever possible, I also apply my passion for developing
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Angularjs.</b>
              </i>
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
              Feel free to <span className="home-about-section">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/madhura1105"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/madhura-gondhalekar-252a27246/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/_madhura11443_/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
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
