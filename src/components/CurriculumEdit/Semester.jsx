import React, { Component } from "react";
import styled from "styled-components";
import { Droppable, Draggable } from "react-beautiful-dnd";

import CourseTile from "../Curriculum/CourseTile";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  width: 120px;
  transition: background-color 0.3s ease;
  :hover {
    background-color: ${(props) =>
      props.isDraggingOver ? "dimgray" : "lightslategrey"};
  }
`;

const EmptyBox = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
`;

class Semester extends Component {
  render() {
    const { yearId, semId, courseIds } = this.props;

    return (
      <Droppable droppableId={`${yearId}-${semId}`}>
        {(dropProvided, dropSnapshot) => (
          <Container
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
