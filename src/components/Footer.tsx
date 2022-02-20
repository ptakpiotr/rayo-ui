import React from "react";
import { Col } from "react-bootstrap";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaLinkedinIn,
  FaTiktok,
  FaTwitterSquare,
  FaYoutubeSquare,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="row">
      <Col>Unofficial Polish Rayo Vallecano Fan Club site</Col>
      <Col>
        <span className="row footer-social">
          <Col>
            <a href="/">
              <FaFacebookSquare />
            </a>
          </Col>
          <Col>
            <a href="/">
              <FaTwitterSquare />
            </a>
          </Col>
          <Col>
            <a href="/">
              <FaLinkedinIn />
            </a>
          </Col>
          <Col>
            <a href="/">
              <FaYoutubeSquare />
            </a>
          </Col>
          <Col>
            <a href="/">
              <FaTiktok />
            </a>
          </Col>
          <Col>
            <a href="/">
              <FaGithubSquare />
            </a>
          </Col>
        </span>
      </Col>
    </footer>
  );
}

export default Footer;
