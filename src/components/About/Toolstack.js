import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiUnrealengine ,
  SiMeta ,
  SiMacos,
} from "react-icons/si";
import {
  DiUnitySmall,
  DiVisualstudio,
} from "react-icons/di";
function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
    <Col xs={4} md={2} className="tech-icons">
      <DiUnitySmall />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <DiVisualstudio />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <SiMeta  />
    </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiUnrealengine  />
      </Col>
    </Row>
  );
}

export default Toolstack;
