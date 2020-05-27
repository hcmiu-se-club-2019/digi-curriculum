import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 3px;
  padding: 2px;
  font-size: 11px;
  font-weight: bold;
  display: flex;
  margin: 10px;
  background-color: white;
`;

const Handle = styled.div`
  width: 20px;
  height: 20px;
  margin-left: 3px;
  border-radius: 3px;
  background-color: ${(props) => {
    switch (props.color) {
      case "blue":
        return "#DAE8FC";
      case "green":
        return "#D5E8D4";
      case "red":
        return "#F8CECC";
      default:
        return "#FFFFFF";
    }
  }};
`

const CourseTypeTile = (props) => {
  return (
    <Container>
      {props.name ?? ""}
      <Handle color={props.color}/>
    </Container>
  )
};

export default CourseTypeTile;
