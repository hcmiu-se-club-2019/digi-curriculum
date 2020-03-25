import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Navbar, Nav, Row, Col } from "react-bootstrap";
// import {} from "prop-types";

import "./decoration.css";
import MajorNavbar from "./MajorNavbar";
import ProgramType from "./ProgramType";

class Home extends Component {
  render() {
    return (
      <div>
        <MajorNavbar />
        <div>
          <Container
            fluid={true}
            style={{ paddingLeft: "0px", paddingRight: "0px" }}
          >
            <Row className="mr-auto overflow-hidden" noGutters={true}>
              <Col xl={2} className="bg-secondary">
                <Navbar style={{ top: "0", position: "sticky" }}>
                  <Nav className="flex-column">
                    <Nav.Link>(IU) International University</Nav.Link>
                    <Nav.Link>(WE) West of England University</Nav.Link>
                    <Nav.Link>(UN) Nottingham University</Nav.Link>
                    <Nav.Link>(SB) Suny Binghamton University</Nav.Link>
                  </Nav>
                </Navbar>
              </Col>
              <Col xl={10} style={{ paddingLeft: "0px", paddingRight: "0px" }}>
                <div>
                  <ProgramType
                    englishEntrance="IE1"
                    titleColor="#3D8BCD"
                    contentColor="#DAE8FC"
                  />
                  <ProgramType
                    englishEntrance="IE2"
                    titleColor="#58B957"
                    contentColor="#D5E8D4"
                  />
                  <ProgramType
                    englishEntrance="AE1"
                    titleColor="#DB524C"
                    contentColor="#F8CECC"
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div>
          <div>123456</div>
          <div>YEEEEEEEEEEEEEEET</div>
          <div>YEEEEEEEEEEEEEEET</div>
          <div>YEEEEEEEEEEEEEEET</div>
          <div>YEEEEEEEEEEEEEEET</div>
          <div>YEEEEEEEEEEEEEEET</div>
          <div>YEEEEEEEEEEEEEEET</div>
          <div>YEEEEEEEEEEEEEEET</div>
          <div>YEEEEEEEEEEEEEEET</div>
          <div>YEEEEEEEEEEEEEEET</div>
          <div>YEEEEEEEEEEEEEEET</div>
        </div>
      </div>
    );
  }
}

export default Home;
