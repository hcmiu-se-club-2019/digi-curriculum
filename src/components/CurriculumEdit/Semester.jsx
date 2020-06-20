import React, { Component } from "react";
import styled from "styled-components";
import { Col } from "react-bootstrap";
import { Droppable, Draggable } from "react-beautiful-dnd";

import CourseTile from "../Curriculum/CourseTile";

const Container = styled(Col).attrs({
  xs: "auto",
  sm: "auto",
  md: "auto",
  lg: "auto",
  xl: "auto",
})`
  display: flex;
  flex-direction: column;
  /* padding: 0px; */
  border-radius: 10px;
  width: 120px;
  :hover {
    background-color: ${(props) =>
      props.isDraggingOver ? "dimgray" : "lightslategrey"};
    transition: background-color 0.3s ease;
  }
`;

const EmptyBox = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  
`;

// const CourseList = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

class Semester extends Component {
  render() {
    const { yearId, semId, courseIds } = this.props;

    return (
      <Droppable droppableId={`${yearId}-${semId}`}>
        {(dropProvided, dropSnapshot) => (
          <Container
            as="div"
            ref={dropProvided.innerRef}
            {...dropProvided.droppableProps}
            isDraggingOver={dropSnapshot.isDraggingOver}
          >
            <div>Sem {semId[semId.length - 1]}</div>
            {courseIds.map((courseId, index) => (
              <Draggable draggableId={courseId} index={index} key={courseId}>
                {(dragProvided) => (
                  <div
                    ref={dragProvided.innerRef}
                    {...dragProvided.dragHandleProps}
                    {...dragProvided.draggableProps}
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
            {dropProvided.placeholder}
            <EmptyBox />
          </Container>
        )}
      </Droppable>
    );
  }
}

export default Semester;
