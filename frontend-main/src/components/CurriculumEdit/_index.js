import { connect } from "react-redux";
// import PropTypes from "prop-types";

import CurriculumEdit from "./index";
import { receiveCourses } from "../../redux/courses/action";
import { receiveCurriculums } from "../../redux/curriculums/action";

const mapDispatchToProps = (dispatch) => ({
  dispatch,
  receiveCourses: () => dispatch(receiveCourses()),
  receiveCurriculums: () => dispatch(receiveCurriculums()),
});

export default connect(null, mapDispatchToProps)(CurriculumEdit);
