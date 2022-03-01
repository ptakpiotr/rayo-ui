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
            <a href="https://www.facebook.com/rvmoficial" title="Facebook">
              <FaFacebookSquare />
            </a>
          </Col>
          <Col>
            <a href="https://twitter.com/rayovallecano" title="Twitter">
              <FaTwitterSquare />
            </a>
          </Col>
          <Col>
            <a
              href="https://www.linkedin.com/company/rayo-vallecano-de-madrid-s-a-d"
              title="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </Col>
          <Col>
            <a
              href="https://www.youtube.com/user/rayovallecanotv/about"
              title="Youtube"
            >
              <FaYoutubeSquare />
            </a>
          </Col>
          <Col>
            <a href="/" title="TikTok">
              <FaTiktok />
            </a>
          </Col>
          <Col>
            <a href="https://github.com/ptakpiotr" title="Github">
              <FaGithubSquare />
            </a>
          </Col>
        </span>
      </Col>
    </footer>
  );
}

export default Footer;
