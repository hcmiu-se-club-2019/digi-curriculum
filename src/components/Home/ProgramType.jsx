import React, { Component } from "react";
import { Nav, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

import "./decoration.css";
import EditButton from "../Button/EditButton";
import CourseTile from "./CourseTile";

class ProgramType extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            backgroundColor: this.props.titleColor,
            paddingTop: "40px",
            paddingBottom: "40px"
          }}
        >
          <Row className="align-items-center" noGutters={true}>
            <Col>
              <div className="english-logo">
                <span
                  className="english-logo-title"
                  style={{ color: this.props.titleColor }}
                >
                  {this.props.englishEntrance}
                </span>
              </div>
            </Col>
            <Col className="text-white text-center">
              <h2>English entrance level 1</h2>
              <b>{`6.5 <= IELTS <= 9.0   or   500 <= TOELF <= 500`}</b>
            </Col>
            <Col>
              <Nav className="justify-content-end">
                <div style={{ paddingRight: "40px" }}>
                  <EditButton
                    name="Print"
                    icon={require("../Button/print-icon-white.svg")}
                  />
                  <EditButton
                    name="Edit"
                    icon={require("../Button/edit-icon-white.svg")}
                  />
                </div>
              </Nav>
            </Col>
          </Row>
        </div>
        <div style={{ padding: "20px 0px 60px 0px", backgroundColor: this.props.contentColor}}>
          <Row className="text-center justify-content-center" noGutters={true}>
            <Col
              xl={3}
              style={{
                minWidth: "346px",
                maxWidth: "346px",
                margin: "0px 20px 0px 20px"
              }}
            >
              <h5 className="border-bottom border-dark">Year 1</h5>
              <Row className="justify-content-center" noGutters={true}>
                <Col className="semester">
                  Sem 1
                  <CourseTile
                    courseId="IT101IU"
                    name="Revolutionary Lines of Vietnamese Commuist Party"
                  />
                  <CourseTile
                    courseId="IT101IU"
                    name="Revolutionary Lines of Vietnamese Commuist Party"
                  />
                  <CourseTile
                    courseId="IT101IU"
                    name="Revolutionary Lines of Vietnamese Commuist Party"
                  />
                  <CourseTile
                    courseId="IT101IU"
                    name="Revolutionary Lines of Vietnamese Commuist Party"
                  />
                  <CourseTile
                    courseId="IT101IU"
                    name="Revolutionary Lines of Vietnamese Commuist Party"
                  />
                </Col>
                <Col
                  className="semester"
                  style={{ margin: "0px 20px 0px 20px" }}
                >
                  Sem 2
                  <CourseTile
                    courseId="IT101IU"
                    name="Revolutionary Lines of Vietnamese Commuist Party"
                  />
                  <CourseTile
                    courseId="IT101IU"
                    name="Revolutionary Lines of Vietnamese Commuist Party"
                  />
                  <CourseTile
                    courseId="IT101IU"
                    name="Revolutionary Lines of Vietnamese Commuist Party"
                  />
                  <CourseTile
                    courseId="IT101IU"
                    name="Revolutionary Lines of Vietnamese Commuist Party"
                  />
                  <CourseTile
                    courseId="IT101IU"
                    name="Revolutionary Lines of Vietnamese Commuist Party"
                  />
                  <CourseTile
                    courseId="IT101IU"
                    name="Revolutionary Lines of Vietnamese Commuist Party"
                  />
                  <CourseTile
                    courseId="IT101IU"
                    name="Revolutionary Lines of Vietnamese Commuist Party"
                  />
                </Col>
                <Col className="semester">
                  Sem 3
                  <CourseTile
                    courseId="IT101IU"
                    name="Revolutionary Lines of Vietnamese Commuist Party"
                  />
                  <CourseTile
                    courseId="IT101IU"
                    name="Revolutionary Lines of Vietnamese Commuist Party"
                  />
                  <CourseTile
                    courseId="IT101IU"
                    name="Revolutionary Lines of Vietnamese Commuist Party"
                  />
                </Col>
              </Row>
            </Col>
            <Col
              xl={3}
              style={{
                minWidth: "346px",
                maxWidth: "346px",
                margin: "0px 20px 0px 20px"
              }}
            >
              <h5 className="border-bottom border-dark">Year 2</h5>
              <Row className="justify-content-center" noGutters={true}>
                <Col className="semester">
                  Sem 1
                  <CourseTile
                    courseId="IT101IU"
                    name="Revolutionary Lines of Vietnamese Commuist Party"
                  />
                  <CourseTile
                    courseId="IT101IU"
                    name="Revolutionary Lines of Vietnamese Commuist Party"
                  />
                  <CourseTile
                    courseId="IT101IU"
                    name="Revolutionary Lines of Vietnamese Commuist Party"
                  />
                  <CourseTile
                    courseId="IT101IU"
                    name="Revolutionary Lines of Vietnamese Commuist Party"
                  />
                  <CourseTile
                    courseId="IT101IU"
                    name="Revolutionary Lines of Vietnamese Commuist Party"
                  />
                </Col>
                <Col
                  className="semester"
                  style={{ margin: "0px 20px 0px 20px" }}
                >
                  Sem 2
                  <CourseTile
                    courseId="IT101IU"
                    name="Revolutionary Lines of Vietnamese Commuist Party"
                  />
                  <CourseTile
                    courseId="IT101IU"
                    name="Revolutionary Lines of Vietnamese Commuist Party"
                  />
                  <CourseTile
                    courseId="IT101IU"
                    name="Revolutionary Lines of Vietnamese Commuist Party"
                  />
                  <CourseTile
                    courseId="IT101IU"
                    name="Revolutionary Lines of Vietnamese Commuist Party"
                  />
                  <CourseTile
                    courseId="IT101IU"
                    name="Revolutionary Lines of Vietnamese Commuist Party"
                  />
                  <CourseTile
                    courseId="IT101IU"
                    name="Revolutionary Lines of Vietnamese Commuist Party"
                  />
                  <CourseTile
                    courseId="IT101IU"
                    name="Revolutionary Lines of Vietnamese Commuist Party"
                  />
                </Col>
                <Col className="semester">
                  Sem 3
                  <CourseTile
                    courseId="IT101IU"
                    name="Military Education"
                  />
                </Col>
              </Row>
            </Col>
            <Col
              xl={3}
              style={{
                minWidth: "346px",
                maxWidth: "346px",
                margin: "0px 20px 0px 20px"
              }}
            >
              <h5 className="border-bottom border-dark">Year 3</h5>
              <Row className="justify-content-center" noGutters={true}>
                <Col className="semester">
                  Sem 1
                  <CourseTile
                    courseId="IT101IU"
                    name="Revolutionary Lines of Vietnamese Commuist Party"
                  />
                  <CourseTile
                    courseId="IT101IU"
                    name="Revolutionary Lines of Vietnamese Commuist Party"
                  />
                  <CourseTile
                    courseId="IT101IU"
                    name="Revolutionary Lines of Vietnamese Commuist Party"
                  />
                  <CourseTile
                    courseId="IT101IU"
                    name="Revolutionary Lines of Vietnamese Commuist Party"
                  />
                  <CourseTile
                    courseId="IT101IU"
                    name="Revolutionary Lines of Vietnamese Commuist Party"
                  />
                </Col>
                <Col
                  className="semester"
                  style={{ margin: "0px 20px 0px 20px" }}
                >
                  Sem 2
                  <CourseTile
                    courseId="IT101IU"
                    name="Revolutionary Lines of Vietnamese Commuist Party"
                  />
                  <CourseTile
                    courseId="IT101IU"
                    name="Revolutionary Lines of Vietnamese Commuist Party"
                  />
                  <CourseTile
                    courseId="IT101IU"
                    name="Revolutionary Lines of Vietnamese Commuist Party"
                  />
                  <CourseTile
                    courseId="IT101IU"
                    name="Revolutionary Lines of Vietnamese Commuist Party"
                  />
                  <CourseTile
                    courseId="IT101IU"
                    name="Revolutionary Lines of Vietnamese Commuist Party"
                  />
                  <CourseTile
                    courseId="IT101IU"
                    name="Revolutionary Lines of Vietnamese Commuist Party"
                  />
                  <CourseTile
                    courseId="IT101IU"
                    name="Revolutionary Lines of Vietnamese Commuist Party"
                  />
                </Col>
                <Col className="semester">
                  Sem 3
                  <CourseTile
                    courseId="IT101IU"
                    name="Revolutionary Lines of Vietnamese Commuist Party"
                  />
                  <CourseTile
                    courseId="IT101IU"
                    name="Revolutionary Lines of Vietnamese Commuist Party"
                  />
                  <CourseTile
                    courseId="IT101IU"
                    name="Revolutionary Lines of Vietnamese Commuist Party"
                  />
                </Col>
              </Row>
            </Col>
            <Col
              xl={3}
              style={{
                minWidth: "346px",
                maxWidth: "346px",
                margin: "0px 20px 0px 20px"
              }}
            >
              <h5 className="border-bottom border-dark">Year 4</h5>
              <Row className="justify-content-center" noGutters={true}>
                <Col className="semester">
                  Sem 1
                  <CourseTile
                    courseId="IT101IU"
                    name="Revolutionary Lines of Vietnamese Commuist Party"
                  />
                  <CourseTile
                    courseId="IT101IU"
                    name="Revolutionary Lines of Vietnamese Commuist Party"
                  />
                  <CourseTile
                    courseId="IT101IU"
                    name="Revolutionary Lines of Vietnamese Commuist Party"
                  />
                  <CourseTile
                    courseId="IT101IU"
                    name="Revolutionary Lines of Vietnamese Commuist Party"
                  />
                  <CourseTile
                    name="Revolutionary Lines of Vietnamese Commuist Party"
                  />
                </Col>
                <Col
                  className="semester"
                  style={{ margin: "0px 20px 0px 20px" }}
                >
                  Sem 2
                  <CourseTile
                    courseId="IT101IU"
                    name="Revolutionary Lines of Vietnamese Commuist Party"
                  />
                  <CourseTile
                    courseId="IT101IU"
                    name="Revolutionary Lines of Vietnamese Commuist Party"
                  />
                  <CourseTile
                    courseId="IT101IU"
                    name="Revolutionary Lines of Vietnamese Commuist Party"
                  />
                  <CourseTile
                    courseId="IT101IU"
                    name="Revolutionary Lines of Vietnamese Commuist Party"
                  />
                  <CourseTile
                    courseId="IT101IU"
                    name="Revolutionary Lines of Vietnamese Commuist Party"
                  />
                  <CourseTile
                    name="Revolutionary Lines of Vietnamese Commuist Party"
                  />
                  <CourseTile
                    name="Revolutionary Lines of Vietnamese Commuist Party"
                  />
                </Col>
                <Col className="semester">
                  Sem 3
                  <CourseTile
                    courseId="IT101IU"
                    name="Revolutionary Lines of Vietnamese Commuist Party"
                  />
                  <CourseTile
                    courseId="IT101IU"
                    name="Revolutionary Lines of Vietnamese Commuist Party"
                  />
                  <CourseTile
                    courseId="IT101IU"
                    name="Revolutionary Lines of Vietnamese Commuist Party"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default ProgramType;
