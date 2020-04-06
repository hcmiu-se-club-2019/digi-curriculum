import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Row, Col } from "react-bootstrap";

import "./decoration.css";
import MajorNavbar from "./MajorNavbar";
import ProgramType from "./ProgramType";
import Content from "./Content";

class Home extends Component {
  render() {
    return (
      <div>
        <MajorNavbar />
        <Container
          fluid={true}
          style={{ paddingLeft: "0px", paddingRight: "0px" }}
        >
          <Row className="mr-auto overflow-hidden" noGutters={true}>
            <Col xl={2} className="bg-secondary">
              <ProgramType />
            </Col>
            <Col xl={10} style={{ paddingLeft: "0px", paddingRight: "0px" }}>
              <Content />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
