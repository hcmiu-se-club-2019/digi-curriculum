import { connect } from "react-redux";

import Semester from "./Semester";

const mapStateToProps = (state, ownProps) => {
  const { courses } = state;
  const { allIds } = courses;
  return {
    courses,
    allIds
  };
};

// const mapDispatchToProps = (dispatch) => ({
//   dispatch,
// });

export default connect(
  mapStateToProps,
  null
)(Semester);
