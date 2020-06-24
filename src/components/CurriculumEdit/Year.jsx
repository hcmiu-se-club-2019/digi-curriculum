import React, { Component } from "react";
import styled from "styled-components";

import data from "./data";
import Semester from "./Semester";

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
    const { order, yearId } = this.props;
    return (
      <Container>
        <b>Year {order}</b>
        <SemesterList>
          {data.years[yearId].semOrder.map((semId) => (
            <Semester
              key={`${yearId}-${semId}`}
              yearId={yearId}
              semId={semId}
              courseIds={data.years[yearId].semesters[semId].courseIds}
            />
          ))}
        </SemesterList>
      </Container>
    );
  }
}

export default Year;
