import React from "react";
import { Col, Row } from "react-bootstrap";
import DynamicCard from "./DynamicCard";
function News() {
  return (
    <Row>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((el) => (
        <Col md={4} key={el}>
          <DynamicCard />
        </Col>
      ))}
    </Row>
  );
}

export default News;
