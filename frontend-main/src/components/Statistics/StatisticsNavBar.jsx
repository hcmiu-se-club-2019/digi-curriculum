import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import styled from 'styled-components';

const SelectGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
`;

class StatisticsNavBar extends Component {
  render() {
    return (
      <Container fluid>
        <Row as={SelectGroup}>
          <Col sm={'auto'} md={'auto'} lg={'auto'} xl={'auto'}>
            <Link to="/statistics">Overview</Link>
          </Col>
          <Col sm={'auto'} md={'auto'} lg={'auto'} xl={'auto'}>
            <Link to="/statistics/courses">Courses</Link>
          </Col>
          <Col sm={'auto'} md={'auto'} lg={'auto'} xl={'auto'}>
            <Link to="/statistics/grading">Students Scores</Link>
          </Col>
          <Col sm={'auto'} md={'auto'} lg={'auto'} xl={'auto'}>
            <Link to="/statistics/learning-progress">Learning Progress</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default StatisticsNavBar;
