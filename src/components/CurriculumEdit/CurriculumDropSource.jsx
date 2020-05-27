import React, { Component } from "react";
import styled from "styled-components";
import { Row, Col, Container } from "react-bootstrap";

// import Content from "./../Curriculum/Content";
import CourseTile from "./../Curriculum/CourseTile";

const DropContent = styled.div`
  background-color: steelblue;
  display: flex;
  overflow-x: auto;
  flex-direction: row;
  padding: 20px 20px 20px 20px;
  /* Fix overflow-x visual bug */
  ::after {
    content: "";
    flex: 0 0 20px;
  }
`;

const Year = styled(Col).attrs({
  xs: "auto",
  sm: "auto",
  md: "auto",
  lg: "auto",
  xl: "auto",
})`
  background-color: gainsboro;
  border-radius: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin: 10px;
  text-align: center;
`;

const Semester = styled.div`
  display: flex;
  flex-direction: column;
`;

class CurriculumDropSource extends Component {
  render() {
    console.log("RENDER");
    return (
      <Container fluid>
        <Row>
          <DropContent>
            <Year>
              <Row>
                <Col style={{ fontWeight: "bold" }}>Year 1</Col>
              </Row>
              <Row noGutters style={{ display: "flex", flexWrap: "nowrap" }}>
                <Col
                  as={Semester}
                  xs={"auto"}
                  sm={"auto"}
                  md={"auto"}
                  lg={"auto"}
                  xl={"auto"}
                >
                  <div>Sem 1</div>
                  <CourseTile active />
                  <CourseTile active />
                  <CourseTile active />
                  <CourseTile active />
                  <CourseTile active />
                </Col>
                <Col
                  as={Semester}
                  xs={"auto"}
                  sm={"auto"}
                  md={"auto"}
                  lg={"auto"}
                  xl={"auto"}
                >
                  <div>Sem 1</div>
                  <CourseTile active />
                  <CourseTile active />
                  <CourseTile active />
                  <CourseTile active />
                  <CourseTile active />
                  <CourseTile active />
                  <CourseTile active />
                </Col>
                <Col
                  as={Semester}
                  xs={"auto"}
                  sm={"auto"}
                  md={"auto"}
                  lg={"auto"}
                  xl={"auto"}
                >
                  <div>Sem 1</div>
                  <CourseTile active />
                  <CourseTile active />
                  <CourseTile active />
                </Col>
              </Row>
            </Year>
            <Year>
              <Row>
                <Col style={{ fontWeight: "bold" }}>Year 1</Col>
              </Row>
              <Row noGutters style={{ display: "flex", flexWrap: "nowrap" }}>
                <Col
                  as={Semester}
                  xs={"auto"}
                  sm={"auto"}
                  md={"auto"}
                  lg={"auto"}
                  xl={"auto"}
                >
                  <div>Sem 1</div>
                  <CourseTile active />
                  <CourseTile active />
                  <CourseTile active />
                  <CourseTile active />
                  <CourseTile active />
                </Col>
                <Col
                  as={Semester}
                  xs={"auto"}
                  sm={"auto"}
                  md={"auto"}
                  lg={"auto"}
                  xl={"auto"}
                >
                  <div>Sem 1</div>
                  <CourseTile active />
                  <CourseTile active />
                  <CourseTile active />
                  <CourseTile active />
                  <CourseTile active />
                  <CourseTile active />
                  <CourseTile active />
                </Col>
                <Col
                  as={Semester}
                  xs={"auto"}
                  sm={"auto"}
                  md={"auto"}
                  lg={"auto"}
                  xl={"auto"}
                >
                  <div>Sem 1</div>
                  <CourseTile active />
                  <CourseTile active />
                  <CourseTile active />
                </Col>
              </Row>
            </Year>
            <Year>
              <Row>
                <Col style={{ fontWeight: "bold" }}>Year 1</Col>
              </Row>
              <Row noGutters style={{ display: "flex", flexWrap: "nowrap" }}>
                <Col
                  as={Semester}
                  xs={"auto"}
                  sm={"auto"}
                  md={"auto"}
                  lg={"auto"}
                  xl={"auto"}
                >
                  <div>Sem 1</div>
                  <CourseTile active />
                  <CourseTile active />
                  <CourseTile active />
                  <CourseTile active />
                  <CourseTile active />
                </Col>
                <Col
                  as={Semester}
                  xs={"auto"}
                  sm={"auto"}
                  md={"auto"}
                  lg={"auto"}
                  xl={"auto"}
                >
                  <div>Sem 1</div>
                  <CourseTile active />
                  <CourseTile active />
                  <CourseTile active />
                  <CourseTile active />
                  <CourseTile active />
                  <CourseTile active />
                  <CourseTile active />
                </Col>
                <Col
                  as={Semester}
                  xs={"auto"}
                  sm={"auto"}
                  md={"auto"}
                  lg={"auto"}
                  xl={"auto"}
                >
                  <div>Sem 1</div>
                  <CourseTile active />
                  <CourseTile active />
                  <CourseTile active />
                </Col>
              </Row>
            </Year>
            <Year>
              <Row>
                <Col style={{ fontWeight: "bold" }}>Year 1</Col>
              </Row>
              <Row noGutters style={{ display: "flex", flexWrap: "nowrap" }}>
                <Col
                  as={Semester}
                  xs={"auto"}
                  sm={"auto"}
                  md={"auto"}
                  lg={"auto"}
                  xl={"auto"}
                >
                  <div>Sem 1</div>
                  <CourseTile active />
                  <CourseTile active />
                  <CourseTile active />
                  <CourseTile active />
                  <CourseTile active />
                </Col>
                <Col
                  as={Semester}
                  xs={"auto"}
                  sm={"auto"}
                  md={"auto"}
                  lg={"auto"}
                  xl={"auto"}
                >
                  <div>Sem 1</div>
                  <CourseTile active />
                  <CourseTile active />
                  <CourseTile active />
                  <CourseTile active />
                  <CourseTile active />
                  <CourseTile active />
                  <CourseTile active />
                </Col>
                <Col
                  as={Semester}
                  xs={"auto"}
                  sm={"auto"}
                  md={"auto"}
                  lg={"auto"}
                  xl={"auto"}
                >
                  <div>Sem 1</div>
                  <CourseTile active />
                  <CourseTile active />
                  <CourseTile active />
                </Col>
              </Row>
            </Year>
            <Year>
              <Row>
                <Col style={{ fontWeight: "bold" }}>Year 1</Col>
              </Row>
              <Row noGutters style={{ display: "flex", flexWrap: "nowrap" }}>
                <Col
                  as={Semester}
                  xs={"auto"}
                  sm={"auto"}
                  md={"auto"}
                  lg={"auto"}
                  xl={"auto"}
                >
                  <div>Sem 1</div>
                  <CourseTile active />
                  <CourseTile active />
                  <CourseTile active />
                  <CourseTile active />
                  <CourseTile active />
                </Col>
                <Col
                  as={Semester}
                  xs={"auto"}
                  sm={"auto"}
                  md={"auto"}
                  lg={"auto"}
                  xl={"auto"}
                >
                  <div>Sem 1</div>
                  <CourseTile active />
                  <CourseTile active />
                  <CourseTile active />
                  <CourseTile active />
                  <CourseTile active />
                  <CourseTile active />
                  <CourseTile active />
                </Col>
                <Col
                  as={Semester}
                  xs={"auto"}
                  sm={"auto"}
                  md={"auto"}
                  lg={"auto"}
                  xl={"auto"}
                >
                  <div>Sem 1</div>
                  <CourseTile active />
                  <CourseTile active />
                  <CourseTile active />
                </Col>
              </Row>
            </Year>
          </DropContent>
        </Row>
      </Container>
    );
  }
}

export default CurriculumDropSource;
