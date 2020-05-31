import React, { Component } from "react";
import styled from "styled-components";
import { Row, Col, Container } from "react-bootstrap";

// import Content from "./../Curriculum/Content";
import CourseTile from "../Curriculum/CourseTile";
import data from "./data";

const DropContent = styled.div`
  /* background-color: steelblue; */
  display: flex;
  overflow-x: auto;
  flex-direction: row;
  padding: 20px 20px 20px 20px;
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
`;

const Semester = styled.div`
  display: flex;
  flex-direction: column;
`;

class CurriculumDropDestination extends Component {
  render() {
    return (
      <Container fluid>
        <Row style={{ backgroundColor: "steelblue" }}>
          <DropContent>
            {data.yearOrder.map((yearId) => (
              <Year>
                <Row>
                  <Col style={{ fontWeight: "bold" }}>
                    Year {yearId[yearId.length - 1]}
                  </Col>
                </Row>
                <Row noGutters style={{ display: "flex", flexWrap: "nowrap" }}>
                  {data.years[yearId].semOrder.map((semId) => (
                    <Col
                      as={Semester}
                      key={semId}
                      xs={"auto"}
                      sm={"auto"}
                      md={"auto"}
                      lg={"auto"}
                      xl={"auto"}
                    >
                      <div>Sem {semId[semId.length - 1]}</div>
                      {data.years.year1.semesters[semId].courseIds.map(
                        (courseId) => (
                          <CourseTile courseId={courseId} active />
                        )
                      )}
                    </Col>
                  ))}
                </Row>
              </Year>
            ))}
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
