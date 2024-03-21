import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiChrome, DiFirefox, DiGoogleDrive } from "react-icons/di";
import {
  SiVisualstudiocode,
  SiPostman,
  SiWindows11,
  SiXampp
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows11 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiFirefox />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiChrome />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiXampp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGoogleDrive />
      </Col>
    </Row>
  );
}

export default Toolstack;
