import React, { Component } from "react";
import { Container, Row, Col, Navbar } from "react-bootstrap";
// import { DragDropContext } from "react-beautiful-dnd";
import styled from "styled-components";

import CurriculumActionFilter from "./CurriculumActionFilter";
import CourseDragSource from "./CourseDragSource";
import CurriculumDropDestination from "./CurriculumDropDestination";

const DragSourceContainer = styled.div`
  background-color: whitesmoke;
`;

class CurriculumEdit extends Component {
  render() {
    return (
      <Container fluid style={{ padding: "0px" }}>
        <Navbar bsPrefix="div" fixed="top" sticky="top">
          <CurriculumActionFilter />
        </Navbar>
        {/* <DragDropContext onDragEnd={this.onDragEnd}> */}
        <Row noGutters>
          <Col sm={3} md={3} lg={3} xl={3}>
            <DragSourceContainer>
              <CourseDragSource />
            </DragSourceContainer>
          </Col>
          <Col sm={9} md={9} lg={9} xl={9}>
            <CurriculumDropDestination />
          </Col>
        </Row>
        {/* </DragDropContext> */}
      </Container>
    );
  }
}

export default CurriculumEdit;
