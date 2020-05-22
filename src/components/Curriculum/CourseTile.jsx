import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  width: 102px;
  height: 82px;
  overflow: false;
  text-align: center;
  margin: 10px;
`;

const CourseName = styled.div`
  height: ${(props) => (props.id ? "60px" : "80px")};
  font-size: ${(props) => (props.id ? "11px" : "14px")};
  font-weight: bold;
  line-height: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CourseId = styled.div`
  height: 20px;
  font-size: 14px;
`;

function CourseTile(props) {
  return (
    <Container>
      <CourseName id={props.courseId}>
        {props.courseId
          ? props.name
            ? props.name.length <= 50
              ? props.name
              : props.name.substring(0, 50) + "..."
            : "(No Name)"
          : "Elective"}
      </CourseName>
      {props.courseId ? <CourseId>{props.courseId}</CourseId> : ""}
    </Container>
  );
}

export default CourseTile;
