import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Semester from "./_Semester";

const Container = styled.div`
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

class Year extends Component {
  render() {
    // console.log(this.props.data);
    const { index, yearId, data } = this.props;
    return (
      <Container>
        <b>Year {index}</b>
        <SemesterList>
          {data.semOrder.map((semId, semIndex) => (
            <Semester
              key={`${yearId}-${semId}`}
              id={`${yearId}-${semId}`}
              courseIds={data.semesters[semId].courseIds}
              index={semIndex + 1}
            />
          ))}
        </SemesterList>
      </Container>
    );
  }
}

Year.propTypes = {
  yearOrder: PropTypes.array,
  years: PropTypes.object,
  onDragEnd: PropTypes.func,
};

export default Year;
