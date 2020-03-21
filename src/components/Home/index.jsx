import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Navbar, NavDropdown, Nav, Row, Col } from "react-bootstrap";
// import {} from "prop-types";

import "./decoration.css";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light">
          <Container>
            <NavDropdown className="major" title="Information Technology">
              <NavDropdown.Item>Information Technology</NavDropdown.Item>
              <NavDropdown.Item>Business Administration</NavDropdown.Item>
              <NavDropdown.Item>Electrical Engineering</NavDropdown.Item>
            </NavDropdown>
          </Container>
          <Nav className="justify-content-end">
            <Nav.Item className="sub-major">Computer Science</Nav.Item>
            <Nav.Item className="sub-major">Network Engineering</Nav.Item>
            <Nav.Item className="sub-major border-bottom border-dark">Data Science</Nav.Item>
          </Nav>
        </Navbar>
        <Row>
          <Col xl={2}>
            <Navbar>
              <Nav className="flex-column">
                <Nav.Item>(IU) International University</Nav.Item>
                <Nav.Item>(WE) West of England University</Nav.Item>
                <Nav.Item>(UN) Nottinghan University</Nav.Item>
                <Nav.Item>(SB) Suny Binghamton University</Nav.Item>
              </Nav>
            </Navbar>
          </Col>
          <Col xl={10}>
            <div>
              <div>
                <div
                  style={{
                    backgroundColor: "#3D8BCD",
                    paddingTop: "40px",
                    paddingBottom: "40px"
                  }}
                >
                  <Row className="align-items-center">
                    <Col>
                      <div className="english-logo">
                        <span
                          className="english-logo-title"
                          style={{ color: "#3D8BCD" }}
                        >
                          IE1
                        </span>
                      </div>
                    </Col>
                    <Col className="text-white text-center">
                      <h2>English entrance level 1</h2>
                      <b>{`6.5 <= IELTS <= 9.0   or   500 <= TOELF <= 500`}</b>
                    </Col>
                    <Col>
                      <Nav className="justify-content-end">Print Edit</Nav>
                    </Col>
                  </Row>
                </div>
                <div>
                  MAIN CONTENT
                </div>
              </div>
            </div>
          </Col>
        </Row>
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
        <div>YEEEEEEEEEEEEEEET</div>
        <div>YEEEEEEEEEEEEEEET</div>
        <div>YEEEEEEEEEEEEEEET</div>
        <div>YEEEEEEEEEEEEEEET</div>
        <div>YEEEEEEEEEEEEEEET</div>
        <div>YEEEEEEEEEEEEEEET</div>
        <div>YEEEEEEEEEEEEEEET</div>
      </div>
    );
  }
}

export default Home;
