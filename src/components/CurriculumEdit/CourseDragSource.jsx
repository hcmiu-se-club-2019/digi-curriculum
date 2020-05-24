import React, { Component } from "react";
import styled from "styled-components";
import { Form, Row, Col, Container } from "react-bootstrap";
import CourseTypeTile from "./CourseTypeTile";
import CourseTile from "../Curriculum/CourseTile";

const CourseNameWrapper = styled.div`
  min-width: 50px;
  max-width: 300px;
`;

const SelectWrapper = styled.div`
  min-width: 50px;
  max-width: 300px;
`;

const MajorBox = styled(Container)`
  margin-bottom: 40px;
  /* background-color: darkcyan; */
`;

const CourseTitleWrapper = styled(Row)`
  font-style: italic;
  justify-content: flex-start;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  font-size: 12px;
`;

const TitleWrapper = styled(Row)`
  padding-left: 20px;
  padding-right: 20px;
  margin: 15px 0px 15px 0px;
  font-style: italic;
  justify-content: flex-start;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  font-size: 12px;
  text-align: center;
`;

function CourseTitle(props) {
  return (
    <CourseTitleWrapper>
      <span
        style={{
          fontSize: "22px",
          paddingRight: "10px",
          fontWeight: "bold",
        }}
      >
        {props.majorName ?? "Other"}
      </span>
      <span>{props.count} course(s)</span>
    </CourseTitleWrapper>
  );
}

const CourseList = styled(Row)`
  /* padding-right: 10px;
  padding-left: 10px; */
  justify-content: flex-start;
  display: flex;
  flex-wrap: wrap;
`;

const CourseTypeList = styled(Row)`
  padding-right: 10px;
  padding-left: 10px;
  margin: -15px 0px 0px 0px;
  justify-content: flex-start;
  display: flex;
  flex-wrap: wrap;
`;

const CourseToolbar = styled(Container)`
  background-color: lightgrey;
  padding-top: 15px;
  padding-bottom: 15px;
`;

const CourseSource = styled(Container)`
  padding-top: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid grey;
`;

class CourseDragSource extends Component {
  render() {
    return (
      <div>
        <CourseToolbar>
          <Row noGutters>
            <Col xl={6} style={{ paddingLeft: "5px", paddingRight: "5px" }}>
              <CourseNameWrapper>
                <Form.Control
                  as="input"
                  type="text"
                  placeholder="Find course"
                />
              </CourseNameWrapper>
            </Col>
            <Col xl={6} style={{ paddingLeft: "5px", paddingRight: "5px" }}>
              <SelectWrapper>
                <Form.Control as="select">
                  <option>All major</option>
                  <option>BA - Business Administration</option>
                  <option>IT - Information Technology</option>
                  <option>EE - Electrical Engineering</option>
                </Form.Control>
              </SelectWrapper>
            </Col>
          </Row>
          <TitleWrapper>
            <span
              style={{
                fontSize: "22px",
                paddingRight: "10px",
                fontWeight: "bold",
              }}
            >
              Course Type
            </span>
            <span>Drag over the course to change type</span>
          </TitleWrapper>
          <CourseTypeList>
            <CourseTypeTile color="blue" name="General" />
            <CourseTypeTile color="green" name="Major" />
            <CourseTypeTile color="red" name="Elective (Specialized Major)" />
          </CourseTypeList>
        </CourseToolbar>
        <CourseSource>
          <MajorBox>
            <CourseTitle majorName="Information Technology" count={99} />
            <CourseList>
              <CourseTile courseId="IT101IU" name="Calculus 1" />
              <CourseTile courseId="IT101IU" />
              <CourseTile courseId="IT101IU" />
              <CourseTile courseId="IT101IU" name="Calculus 1" />
              <CourseTile courseId="IT101IU" name="Calculus 1" />
              <CourseTile courseId="IT101IU" name="Calculus 1" />
              <CourseTile courseId="IT101IU" name="Calculus 1" />
            </CourseList>
          </MajorBox>
          <MajorBox>
            <CourseTitle majorName="Information Technology" count={99} />
            <CourseList>
              <CourseTile courseId="IT101IU" name="Calculus 1" />
              <CourseTile courseId="IT101IU" />
              <CourseTile courseId="IT101IU" />
              <CourseTile courseId="IT101IU" name="Calculus 1" />
              <CourseTile courseId="IT101IU" name="Calculus 1" />
              <CourseTile courseId="IT101IU" name="Calculus 1" />
              <CourseTile />
            </CourseList>
          </MajorBox>
        </CourseSource>
      </div>
    );
  }
}

export default CourseDragSource;
