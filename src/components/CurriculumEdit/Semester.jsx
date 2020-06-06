import React, { Component } from "react";
import styled from "styled-components";
import { Col } from "react-bootstrap";
import { Droppable, Draggable } from "react-beautiful-dnd";

import CourseTile from "../Curriculum/CourseTile";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const CourseList = styled.div`
  display: flex;
  flex-direction: column;
  background-color: inherit;
  border-radius: 10px;
  :hover {
    background-color: ${(props) => (props.isDraggingOver ? "dimgray" : "lightslategrey")};
    transition: background-color 0.3s ease;
  }
`;

class Semester extends React.PureComponent {
  render() {
    const { yearId, semId, courseIds } = this.props;

    return (
      <Col
        as={Container}
        xs={"auto"}
        sm={"auto"}
        md={"auto"}
        lg={"auto"}
        xl={"auto"}
      >
        <div>Sem {semId[semId.length - 1]}</div>
        <Droppable droppableId={`${yearId}-${semId}`}>
          {(provided, snapshot) => (
            <CourseList
              ref={provided.innerRef}
              {...provided.droppableProps}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {courseIds.map((courseId, index) => (
                <Draggable draggableId={courseId} index={index} key={courseId}>
                  {(provided2) => (
                    <div
                      ref={provided2.innerRef}
                      {...provided2.dragHandleProps}
                      {...provided2.draggableProps}
                    >
                      <CourseTile
                        key={courseId}
                        courseId={courseId}
                        name="YEET"
                        active
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </CourseList>
          )}
        </Droppable>
      </Col>
    );
  }
}

export default Semester;
