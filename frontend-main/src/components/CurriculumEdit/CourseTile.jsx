import React from 'react';
import styled from 'styled-components';

const TILE_COLOR = {
  red: {
    name: 'red',
    borderColor: '#B85450',
    backgroundColor: '#F8CECC',
  },
  orange: {
    name: 'orange',
    borderColor: '#D79B00',
    backgroundColor: '#FFE6CC',
  },
  yellow: {
    name: 'yellow',
    borderColor: '#D6B656',
    backgroundColor: '#FFFFCC',
  },
  green: {
    name: 'green',
    borderColor: '#82B366',
    backgroundColor: '#D5E8D4',
  },
  blue: {
    name: 'blue',
    borderColor: '#6C8EBF',
    backgroundColor: '#CCE5FF',
  },
  indigo: {
    name: 'indigo',
    borderColor: '#6B6BB3',
    backgroundColor: '#CCCCFF',
  },
  purple: {
    name: 'purple',
    borderColor: '#9673A6',
    backgroundColor: '#E5CCFF',
  },
  white: {
    name: 'white',
    borderColor: '#000000',
    backgroundColor: '#FFFFFF',
  },
};

const Container = styled.div`
  /* border-bottom: 3px solid; */
  border-radius: 10px;
  border-color: ${(props) => (props.active ? TILE_COLOR[props.color ?? TILE_COLOR.white.name].borderColor : '#000000')};
  background-color: ${(props) => (props.active ? TILE_COLOR[props.color ?? TILE_COLOR.white.name].backgroundColor : 'rgba(255, 255, 255, 0.0)')};
  box-shadow: 0px 3px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 0px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.2s ease;
  opacity: ${(props) => (props.dragged === true ? 0.4 : 1.0)};
  width: 104px;
  height: 84px;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  text-align: center;
  margin: 10px;
  padding: 2px;
  :hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 5px 15px 0 rgba(0, 0, 0, 0.3);
  }
`;

const CourseName = styled.div`
  height: ${(props) => (props.id ? '60px' : '80px')};
  font-size: ${(props) => (props.id ? '11px' : '14px')};
  font-weight: bold;
  line-height: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CourseId = styled.div`
  height: 20px;
  font-size: 14px;
`;

function CourseTile(props) {
  return (
    <Container color={props.color} active={props.active} dragged={props.dragged}>
      <CourseName id={props.courseId}>
        {props.courseId ? (props.name ? (props.name.length <= 50 ? props.name : props.name.substring(0, 50) + '...') : '(No Name)') : 'Elective'}
      </CourseName>
      {props.courseId ? <CourseId>{props.courseId}</CourseId> : ''}
    </Container>
  );
}

export default CourseTile;
