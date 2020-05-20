import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import "./decoration.css";
import MajorNavbar from "./MajorNavbar";
import ProgramType from "./ProgramType";
import Content from "./Content";

const EditLinkWrapper = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
  display: grid;
  font-weight: bold;
`;

const EditLink = styled.div`
  border: 3px solid black;
  border-radius: 5px;
  width: 150px;
  height: 50px;
  justify-content: center;
  align-items: center;
  display: flex;
`;

class Home extends Component {
  render() {
    return (
      <div>
        <EditLinkWrapper>
          Warning: This page is under construction
          <Link to="/curriculum/edit">
            <EditLink>Edit Curriculum</EditLink>
          </Link>
        </EditLinkWrapper>
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
