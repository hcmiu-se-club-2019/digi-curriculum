import React, { Component } from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

import CourseDragSource from "./CourseDragSource";
import CurriculumDropPanel from "./CurriculumDropPanel";

const Container = styled.div`
  /* padding-top: 350px;
  padding-bottom: 350px; */
`;

const DragSource = styled.div`
  /* padding: 15px 10px 15px 10px; */
`;

const DropSource = styled.div`
  background-color: lightgreen;
`;

class CurriculumEdit extends Component {
  render() {
    return (
      <Container className="row no-gutters">
        <DragSource className="col-3">
          <CourseDragSource />
        </DragSource>
        <DropSource className="col-9"><CurriculumDropPanel /></DropSource>
      </Container>
    );
  }
}

export default CurriculumEdit;
