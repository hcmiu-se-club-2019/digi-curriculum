import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import "./decoration.css";
import { getMajors } from "../../containers/Majors/action";
import { getSubMajors, clearSubMajors } from "../../containers/SubMajors/action";
import {
  selectMajor,
  selectSubMajor
} from "../../containers/components/Home/action";
import { getProgramTypesBySubMajor } from "../../containers/ProgramType/action";

class MajorNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMajorId: null,
      selectedMajorName: null,
      selectedSubMajorId: null
    };
    this.handleSelectMajor = this.handleSelectMajor.bind(this);
    this.handleSelectSubMajor = this.handleSelectSubMajor.bind(this);
  }

  componentDidMount() {
    this.props.getMajors();
  }

  async handleSelectMajor(major) {
    await this.props.clearSubMajor();
    await this.props.selectMajor(major);
    await this.props.getSubMajors(major.id);

    if (this.props.subMajors.length !== 0) {
      await this.props.selectSubMajor(this.props.subMajors[0].id);
      await this.props.getProgramTypesBySubMajor(this.props.subMajors[0].programTypeIds);
    } 
  }

  async handleSelectSubMajor(subMajor) {
    await this.props.selectSubMajor(subMajor.id);
    await this.props.getProgramTypesBySubMajor(subMajor.programTypeIds);
  }

  render() {
    let {
      majors,
      subMajors,
      selectedMajorId,
      selectedMajorName,
      selectedSubMajorId
    } = this.props;

    return (
      <Navbar
        bg="light"
        fixed="top"
        style={{ top: "0", position: "sticky" }}
        className="mr-auto"
      >
        <Navbar.Collapse>
          <NavDropdown
            className="major mr-auto"
            title={selectedMajorId ? selectedMajorName : "Select Major"}
          >
            {majors.map(major => (
              <NavDropdown.Item
                key={major.id}
                onSelect={() => this.handleSelectMajor(major)}
              >
                {major.name}
              </NavDropdown.Item>
            ))}
          </NavDropdown>

          {/* Sub major */}
          <Nav className="justify-content-end">
            {subMajors.map(subMajor => (
              <Nav.Link
                className={`sub-major ${
                  selectedSubMajorId === subMajor.id
                    ? "border-bottom border-dark"
                    : ""
                }`}
                key={subMajor.id}
                onClick={() => this.handleSelectSubMajor(subMajor)}
              >
                {subMajor.name}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

MajorNavbar.propTypes = {
  majors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string
    })
  ),
  subMajor: PropTypes.arrayOf(
    PropTypes.shape({
      major: PropTypes.string,
      id: PropTypes.string,
      name: PropTypes.string,
      programTypeIds: PropTypes.array
    })
  ),
  selectedMajorId: PropTypes.string,
  selectedMajorName: PropTypes.string,
  selectedSubMajorId: PropTypes.string,
  selectedProgramTypeId: PropTypes.string
};

function mapStateToProps(state) {
  const { majors, subMajors } = state;
  const {
    selectedMajorId,
    selectedMajorName,
    selectedSubMajorId
  } = state.components.home;

  return {
    majors,
    subMajors,
    selectedMajorId,
    selectedMajorName,
    selectedSubMajorId
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getMajors: () => dispatch(getMajors()),
    getSubMajors: id => dispatch(getSubMajors(id)),
    clearSubMajor: () => dispatch(clearSubMajors()),
    selectMajor: id => dispatch(selectMajor(id)),
    selectSubMajor: id => dispatch(selectSubMajor(id)),
    getProgramTypesBySubMajor: id => dispatch(getProgramTypesBySubMajor(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MajorNavbar);
