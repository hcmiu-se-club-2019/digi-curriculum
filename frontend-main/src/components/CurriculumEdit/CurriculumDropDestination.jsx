import React, { Component } from 'react';
import styled from 'styled-components';
import { Row, Container } from 'react-bootstrap';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import PropTypes from 'prop-types';

import img from './drop-content-background.jpg';
import Year from './Year';

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
    content: '';
    padding: 10px;
  }
`;

class CurriculumDropDestination extends Component {
  render() {
    const { yearOrder, years, onDragEnd } = this.props;
    return (
      <Container fluid>
        <Row style={{ display: 'inherit' }}>
          <DragDropContext onDragEnd={(result) => onDragEnd(result)}>
            <DropContent>
              {yearOrder.map((yearId, yearIndex) => (
                <Year key={yearId} yearId={yearId} index={yearIndex + 1} data={years[yearId]} />
              ))}
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

CurriculumDropDestination.propTypes = {
  yearOrder: PropTypes.array.isRequired,
  years: PropTypes.object.isRequired,
  onDragEnd: PropTypes.func.isRequired,
};

export default CurriculumDropDestination;
