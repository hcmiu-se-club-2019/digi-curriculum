import React, { Component } from "react";
import styled from "styled-components";
import { Row, Container } from "react-bootstrap";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// import Content from "./../Curriculum/Content";
import img from "./drop-content-background.jpg";
import data from "./data";

// import CourseTile from "../Curriculum/CourseTile";
// import Year from "./Year";
import Semester from "./Semester";

const DropContent = styled.div`
  background-color: steelblue;
  background-image: url(${img});
  display: flex;
  flex-flow: row nowrap;
  overflow-x: auto;
  padding: 20px;
  text-align: center;

  /* Make the columns have different height */
  align-items: flex-start;

  /* Fix overflow-x visual bug */
  ::after {
    content: "";
    padding: 10px;
  }
`;

const Year = styled.div`
  background-color: rgba(220, 220, 220, 0.7);
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2),
    0px 6px 20px 0px rgba(0, 0, 0, 0.19);
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  text-align: center;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const SemesterList = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

class CurriculumDropDestination extends Component {
  state = data;

  onDragEnd = (result) => {
    const { source, destination } = result;
    console.log(result);

    if (!destination) return;
    if (source === destination) return;

    const startYear = source.droppableId.split("-")[0];
    const startSem = source.droppableId.split("-")[1];
    const endYear = destination.droppableId.split("-")[0];
    const endSem = destination.droppableId.split("-")[1];

    const startColumn = this.state.years[startYear].semesters[startSem];
    startColumn.courseIds.splice(source.index, 1);

    const endColumn = this.state.years[endYear].semesters[endSem];
    endColumn.courseIds.splice(destination.index, 0, result.draggableId);

    // this.setState
  };

  render() {
    return (
      <Container fluid>
        <Row style={{ display: "inherit" }}>
          <DragDropContext onDragEnd={this.onDragEnd}>
            <DropContent>
            {/* <Droppable droppableId="dragDropYear">
              {(dropProvided, dropSnapshot) => (
                <DropContent
                  ref={dropProvided.innerRef}
                  {...dropProvided.droppableProps}
                > */}
                  {this.state.yearOrder.map((yearId, index) => (
                    <Year key={yearId}>
                      <b>Year {yearId[yearId.length - 1]}</b>
                      <SemesterList>
                        {data.years[yearId].semOrder.map((semId) => (
                          <Semester
                            key={`${yearId}-${semId}`}
                            yearId={yearId}
                            semId={semId}
                            courseIds={
                              data.years[yearId].semesters[semId].courseIds
                            }
                          />
                        ))}
                      </SemesterList>
                    </Year>
                    // <Draggable key={yearId} draggableId={yearId} index={index}>
                    //   {(dragProvided, dragSnapshot) => (
                    //     <div
                    //       ref={dragProvided.innerRef}
                    //       {...dragProvided.dragHandleProps}
                    //       {...dragProvided.draggableProps}
                    //     >
                    //       <Year yearId={yearId} order={index + 1} />
                    //     </div>
                    //   )}
                    // </Draggable>
                  ))}
                  {/* {dropProvided.placeholder}
                </DropContent>
              )}
            </Droppable> */}
            </DropContent>
          </DragDropContext>
        </Row>
        <Row>
          <div>Elective Courses content here</div>
        </Row>
      </Container>
    );
  }
}

export default CurriculumDropDestination;
