import React, { Component } from "react";
import styled from "styled-components";
import { Row, Col, Container } from "react-bootstrap";

import CourseTile from "../Curriculum/CourseTile";
import SearchForm from "./SearchForm";

const Toolbar = styled(Container).attrs({ fluid: true })`
  background-color: gainsboro;
  padding-top: 15px;
  padding-bottom: 15px;
`;

const MajorLabel = styled.div`
  font-style: italic;
  font-size: 12px;
  align-items: center;
  text-align: center;
`;

function MajorTitle(props) {
  return (
    <Row as={MajorLabel}>
      <Col
        xl={"auto"}
        style={{
          fontSize: "21px",
          fontWeight: "bold",
        }}
      >
        {props.name ?? "(No name)"}
      </Col>
      {props.count ? <Col xl={"auto"}>{props.count} course(s)</Col> : ""}
      {props.note ? <Col xl={"auto"}>{props.note}</Col> : ""}
    </Row>
  );
}

const CourseList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const MajorGroup = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
`;

const Content = styled.div`
  background-color: whitesmoke;
  /* height: 70vh; */
  /* overflow-y: auto; */
`;

class CourseDragSource extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Toolbar>
            <SearchForm />
            {/* <Row style={{ paddingTop: "10px" }}>
              <Container fluid>
                <MajorTitle
                  name="Course Type"
                  note="Drag to curriculum to change course type"
                />
                <Row>
                  <Col as={CourseList}>
                    <CourseTypeTile color="blue" name="General" />
                    <CourseTypeTile color="green" name="Major" />
                    <CourseTypeTile
                      color="red"
                      name="Elective (Specialized Major)"
                    />
                  </Col>
                </Row>
              </Container>
            </Row> */}
          </Toolbar>
        </Row>
        <Row as={Content}>
          <Container fluid>
            <Row as={MajorGroup}>
              <Container fluid>
                <MajorTitle name="Information Technology" count={99} />
                <Row>
                  <Col as={CourseList}>
                    <CourseTile courseId="IT101IU" active />
                    <CourseTile courseId="IT101IU" name="Calculus 1" active />
                    <CourseTile courseId="IT101IU" name="Calculus 2" active />
                    <CourseTile courseId="IT101IU" name="Calculus 3" active />
                    <CourseTile
                      courseId="IT101IU"
                      name="Revolutionary Lines of Vietnamese Communist Party"
                      active
                    />
                    <CourseTile
                      courseId="IT101IU"
                      name="Revolutionary Lines of Vietnamese Communist Party"
                      active
                    />
                    <CourseTile
                      courseId="IT101IU"
                      name="Revolutionary Lines of Vietnamese Communist Party"
                      active
                    />
                  </Col>
                </Row>
              </Container>
            </Row>
            <Row as={MajorGroup}>
              <Container fluid>
                <MajorTitle name="Information Technology" count={99} />
                <Row>
                  <Col as={CourseList}>
                    <CourseTile courseId="IT101IU" />
                    <CourseTile courseId="IT101IU" active />
                    <CourseTile courseId="IT101IU" active dragged />
                    <CourseTile courseId="IT101IU" />
                    <CourseTile courseId="IT101IU" active />
                    <CourseTile courseId="IT101IU" active dragged />
                  </Col>
                </Row>
              </Container>
            </Row>
            <Row as={MajorGroup}>
              <Container fluid>
                <MajorTitle name="Information Technology" count={99} />
                <Row>
                  <Col as={CourseList}>
                    <CourseTile courseId="IT101IU" name="Calculus 1" />
                    <CourseTile courseId="IT101IU" />
                    <CourseTile courseId="IT101IU" />
                    <CourseTile courseId="IT101IU" name="Calculus 1" />
                    <CourseTile courseId="IT101IU" name="Calculus 1" />
                    <CourseTile courseId="IT101IU" name="Calculus 1" />
                  </Col>
                </Row>
              </Container>
            </Row>
          </Container>
        </Row>
      </Container>
    );
  }
}

export default CourseDragSource;
