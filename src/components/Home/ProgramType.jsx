import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getProgramTypesBySubMajor } from "../../containers/ProgramType/action";
import { selectProgramType } from "../../containers/components/Home/action";
import { getEnglishEntrances } from "../../containers/EnglishEntrances/action";
import { findCurriculums } from "../../containers/Curriculums/action";
import { getCourses } from "../../containers/Courses/action";

class ProgramType extends Component {
  constructor(props) {
    super(props);
    this.selectProgramType = this.selectProgramType.bind(this);
  }

  async selectProgramType(id) {
    await this.props.selectProgramType(id);
    console.log("SELECTED PROGRAM: " + id);

    await this.props.getEnglishEntrances();
    await this.props.getCourses();
    const {
      selectedMajorId,
      selectedSubMajorId,
      selectedProgramTypeId,
    } = this.props;
    await this.props.findCurriculums(
      selectedMajorId,
      selectedSubMajorId,
      selectedProgramTypeId
    );
  }

  // componentDidUpdate() {
  //   if (this.props.selectedSubMajorId) {
  //     console.log("Hello");
  //     this.props.getProgramTypesBySubMajor(this.props.selectedSubMajorId);
  //   }
  // }

  render() {
    // console.log("PROGRAM TYPE: " + this.props.selectedSubMajorId);
    // console.log(this.props.programTypes);

    return (
      <Navbar style={{ top: "0", position: "sticky" }}>
        <Nav className="flex-column">
          {this.props.programTypes.map((programType) => (
            <Nav.Link
              key={programType.id}
              className={
                this.props.selectedProgramTypeId === programType.id
                  ? "text-light"
                  : ""
              }
              onClick={() => this.selectProgramType(programType.id)}
            >{`(${programType.id}) ${programType.name}`}</Nav.Link>
          ))}
        </Nav>
      </Navbar>
    );
  }
}

ProgramType.propTypes = {
  programTypes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  selectedMajorId: PropTypes.string,
  selectedSubMajorId: PropTypes.string,
  selectedProgramTypeId: PropTypes.string,
};

const mapStateToProps = (state) => {
  const { programTypes } = state;
  const {
    selectedMajorId,
    selectedSubMajorId,
    selectedProgramTypeId,
  } = state.components.home;

  return {
    programTypes,
    selectedMajorId,
    selectedSubMajorId,
    selectedProgramTypeId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProgramTypesBySubMajor: (id) => dispatch(getProgramTypesBySubMajor(id)),
    selectProgramType: (id) => dispatch(selectProgramType(id)),
    getEnglishEntrances: () => dispatch(getEnglishEntrances()),
    findCurriculums: (majorId, subMajorId, programTypeId, englishEntranceId) =>
      dispatch(
        findCurriculums(majorId, subMajorId, programTypeId, englishEntranceId)
      ),
    getCourses: () => dispatch(getCourses()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProgramType);
