import React, { Component } from 'react';
import styled from 'styled-components';
import { Row, Col, Container } from 'react-bootstrap';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import CourseTile from './CourseTile';
import SearchForm from './SearchForm';
import data_majors from './data-majors';
import data_courses from './data-courses';

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
        xl={'auto'}
        style={{
          fontSize: '21px',
          fontWeight: 'bold',
        }}
      >
        {props.name ?? '(No name)'}
      </Col>
      {props.count ? <Col xl={'auto'}>{props.count} course(s)</Col> : ''}
      {props.note ? <Col xl={'auto'}>{props.note}</Col> : ''}
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
  /* background-color: whitesmoke; */
  /* height: 70vh; */
  /* overflow-y: auto; */
`;

function getStyle(style, snapshot) {
  // if (!snapshot.isDropAnimating) {
  //   return style;
  // }
  return {
    ...style,
    // cannot be 0, but make it super tiny
    transitionDuration: `0.001s`,
  };
}

class CourseDragSource extends Component {
  render() {
    return (
      <Container fluid>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Row>
            <Toolbar>
              <SearchForm />
            </Toolbar>
          </Row>
          <Row as={Content}>
            <Container fluid>
              {data_majors.allIds.map((majorId) => (
                <Droppable droppableId={majorId} key={majorId} isDropDisabled={true}>
                  {(dropProvided, dropSnapshot) => (
                    <MajorGroup ref={dropProvided.innerRef}>
                      <Row>
                        <Container fluid>
                          <MajorTitle name={data_majors[majorId].name} count={99} />
                          <Row>
                            <Col as={CourseList}>
                              {data_courses.allIds.map((courseId, index) =>
                                data_courses[courseId].majorId === majorId ? (
                                  <Draggable draggableId={courseId} index={index} key={courseId} isDragDisabled>
                                    {(dragProvided, dragSnapshot) => (
                                      <div
                                        ref={dragProvided.innerRef}
                                        {...dragProvided.dragHandleProps}
                                        {...dragProvided.draggableProps}
                                        // style={getStyle(dragProvided.draggableProps.style, snapshot2)}
                                      >
                                        <CourseTile
                                          // key={courseId}
                                          courseId={courseId}
                                          name={data_courses[courseId].name}
                                          active
                                        />
                                      </div>
                                    )}
                                  </Draggable>
                                ) : (
                                  ''
                                )
                              )}
                            </Col>
                          </Row>
                        </Container>
                      </Row>
                      {dropProvided.placeholder}
                    </MajorGroup>
                  )}
                </Droppable>
              ))}
            </Container>
          </Row>
        </DragDropContext>
      </Container>
    );
  }
}

export default CourseDragSource;
