import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Nav, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

import "./decoration.css";
import EditButton from "../Button/EditButton";
import CourseTile from "./CourseTile";
// import { getCurriculum } from "../../containers/Curriculums/action";

class Curriculum extends Component {
  render() {
    if (this.props.curriculum) {
      const { level, titleColor, contentColor } = this.props;
      const {
        majorId,
        subMajorId,
        ProgramTypeId,
        englishEntranceId,
        years,
      } = this.props.curriculum;
      const {
        ieltsFrom,
        ieltsTo,
        toeflFrom,
        toeflTo,
      } = this.props.englishEntrance;

      return (
        <div>
          <div
            style={{
              backgroundColor: titleColor,
              paddingTop: "40px",
              paddingBottom: "40px",
            }}
          >
            <Row className="align-items-center" noGutters={true}>
              <Col>
                <div className="english-logo">
                  <span
                    className="english-logo-title"
                    style={{ color: titleColor }}
                  >
                    {englishEntranceId}
                  </span>
                </div>
              </Col>
              <Col className="text-white text-center">
                <h2>English level {level}</h2>
                <b>{`${ieltsFrom} <= IELTS <= ${ieltsTo}   or   ${toeflFrom} <= TOELF <= ${toeflTo}`}</b>
              </Col>
              <Col>
                <Nav className="justify-content-end">
                  <div style={{ paddingRight: "40px" }}>
                    <EditButton
                      name="Print"
                      icon={require("../Button/print-icon-white.svg")}
                    />
                    <EditButton
                      name="Edit"
                      icon={require("../Button/edit-icon-white.svg")}
                    />
                  </div>
                </Nav>
              </Col>
            </Row>
          </div>
          <div
            style={{
              padding: "20px 0px 60px 0px",
              backgroundColor: contentColor,
            }}
          >
            <Row
              className="text-center justify-content-center"
              noGutters={true}
            >
              {years.map((year, i) => (
                <Col
                  xl={3}
                  style={{
                    minWidth: "346px",
                    maxWidth: "346px",
                    margin: "0px 20px 0px 20px",
                  }}
                >
                  <h5 className="border-bottom border-dark">Year {i + 1}</h5>
                  <Row className="justify-content-center" noGutters={true}>
                    <Col className="semester">
                      Sem 1
                      {year.sem1.map((course) => (
                        <CourseTile
                          courseId={course}
                          name="Revolutionary Lines of Vietnamese Commuist Party"
                        />
                      ))}
                    </Col>
                    <Col
                      className="semester"
                      style={{ margin: "0px 20px 0px 20px" }}
                    >
                      Sem 2
                      {year.sem2.map((course) => (
                        <CourseTile
                          courseId={course}
                          name="Revolutionary Lines of Vietnamese Commuist Party"
                        />
                      ))}
                    </Col>
                    <Col className="semester">
                      Sem 3
                      {year.sem3.map((course) => (
                        <CourseTile
                          courseId={course}
                          name="Revolutionary Lines of Vietnamese Commuist Party"
                        />
                      ))}
                    </Col>
                  </Row>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      );
    } else return "";
  }
}

// Curriculum.propTypes = {
//   subMajorId: PropTypes.string,
//   programTypeId: PropTypes.string,
//   englishEntranceId: PropTypes.string,
//   years: PropTypes.arrayOf(
//     PropTypes.shape({
//       sem1: PropTypes.array,
//       sem2: PropTypes.array,
//       sem3: PropTypes.array,
//     })
//   ),
//   electiveCourses: PropTypes.array,
// };

// const mapStateToProps = (state) => {
//   const {
//     selectedMajorId,
//     selectedSubMajorId,
//     selectedProgramTypeId,
//   } = state.components.home;
//   const { curriculums } = state;
//   return {
//     selectedMajorId,
//     selectedSubMajorId,
//     selectedProgramTypeId,
//     curriculum: curriculums,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getCurriculum: (majorId, subMajorId, programTypeId, englishEntranceId) =>
//       dispatch(
//         getCurriculum(majorId, subMajorId, programTypeId, englishEntranceId)
//       ),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Curriculum);
export default Curriculum;
