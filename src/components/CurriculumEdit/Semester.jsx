// import React, { Component } from "react";
import React, { Component } from "react";
import styled from "styled-components";
import { Droppable, Draggable } from "react-beautiful-dnd";
import PropTypes from "prop-types";

import CourseTile from "./CourseTile";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  width: 124px;
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
    const { id, courseIds, index, courses } = this.props;

    return (
      <Droppable droppableId={id}>
        {(dropProvided, dropSnapshot) => (
          <Container
            ref={dropProvided.innerRef}
            {...dropProvided.droppableProps}
            isDraggingOver={dropSnapshot.isDraggingOver}
          >
            <div>Sem {index}</div>
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
                      name={courses[courseId].name}
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

Semester.propTypes = {
  id: PropTypes.string,
  courseIds: PropTypes.array,
  index: PropTypes.number,
  courses: PropTypes.shape({
    name: PropTypes.string,
  }),
};

export default Semester;
