import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

import CurriculumActionFilter from "./CurriculumActionFilter";
import CourseDragSource from "./CourseDragSource";
import CurriculumDropDestination from "./CurriculumDropDestination";

class CurriculumEdit extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     height: null,
  //   };
  // }

  // getHeight(node) {
  //   if (node && !this.state.height) {
  //     this.setState({
  //       height: node.clientHeight,
  //     });
  //   }
  // }

  render() {
    return (
      <Container fluid style={{ padding: "0px" }}>
        <CurriculumActionFilter />
        <Row noGutters>
          <Col sm={3} md={3} lg={3} xl={3}>
            <CourseDragSource /* height={this.state.height} */ />
          </Col>
          <Col sm={9} md={9} lg={9} xl={9}>
            <div /*ref={node => this.getHeight(node)*/>
              <CurriculumDropDestination />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CurriculumEdit;
