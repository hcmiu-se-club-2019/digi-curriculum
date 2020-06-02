import React, { Component } from "react";
import styled from "styled-components";
import { Row, Col, Container } from "react-bootstrap";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// import Content from "./../Curriculum/Content";
import CourseTile from "../Curriculum/CourseTile";
import data from "./data";

const DropContent = styled.div`
  background-color: steelblue;
  display: flex;
  overflow-x: auto;
  flex-direction: row;
  padding: 20px 20px 20px 20px;
  text-align: center;
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
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const Semester = styled.div`
  display: flex;
  flex-direction: column;
`;

class CurriculumDropDestination extends Component {
  state = data;

  render() {
    return (
      <Container fluid>
        <Row style={{ display: "inherit" }}>
          <DropContent>
            <DragDropContext>
              {this.state.yearOrder.map((yearId) => {
                return (
                  <Year key={yearId}>
                    <Row>
                      <Col>
                        <b>Year {yearId[yearId.length - 1]}</b>
                      </Col>
                    </Row>
                    <Row
                      noGutters
                      style={{ display: "flex", flexWrap: "nowrap" }}
                    >
                      {data.years[yearId].semOrder.map((semId) => (
                        <Col
                          as={Semester}
                          key={`${yearId} - ${semId}`}
                          xs={"auto"}
                          sm={"auto"}
                          md={"auto"}
                          lg={"auto"}
                          xl={"auto"}
                        >
                          <div>Sem {semId[semId.length - 1]}</div>
                          <Droppable droppableId={yearId + semId}>
                            {(provided) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                }}
                              >
                                {data.years[yearId].semesters[
                                  semId
                                ].courseIds.map((courseId, index) => (
                                  <Draggable
                                    draggableId={courseId}
                                    index={index}
                                    key={courseId}
                                  >
                                    {(provided2) => (
                                      <div
                                        ref={provided2.innerRef}
                                        {...provided2.dragHandleProps}
                                        {...provided2.draggableProps}
                                      >
                                        <CourseTile
                                          key={courseId}
                                          courseId={courseId}
                                          active
                                        />
                                      </div>
                                    )}
                                  </Draggable>
                                ))}
                                {provided.placeholder}
                              </div>
                            )}
                          </Droppable>
                        </Col>
                      ))}
                    </Row>
                  </Year>
                );
              })}
            </DragDropContext>
          </DropContent>
        </Row>
        <Row>
          <div>YEET</div>
        </Row>
      </Container>
    );
  }
}

export default CurriculumDropDestination;
