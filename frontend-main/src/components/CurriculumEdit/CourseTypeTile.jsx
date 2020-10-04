import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 2px solid;
  border-color: ${props => {
    switch (props.color) {
      case "blue":
        return "#6C8EBF";
      case "green":
        return "#82B366";
      case "red":
        return "#B85450";
      default:
        return "#000000";
    }
  }};
  background-color: ${props => {
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
  width: 104px;
  height: 84px;
  font-size: 11px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
  margin: 10px;
`;

const CourseTypeTile = props => {
  return <Container color={props.color}>{props.name ?? "No name"}</Container>;
};

export default CourseTypeTile;
