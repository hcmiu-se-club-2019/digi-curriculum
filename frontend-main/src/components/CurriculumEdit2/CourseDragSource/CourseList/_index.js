import { connect } from 'react-redux';

import index from './index';
import * as coursesAction from '../../../../redux/courses2/action';

const mapStateToProps = (state, ownProps) => {
  const { allMajors, allMajorIds, allCourses, allCourseIds, errorLog, isFetching } = state.courses2;
  // console.log(allCourses)
  return {
    allMajors,
    allMajorIds,
    allCourses,
    allCourseIds,
    errorLog,
    isFetching,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectCourse: (courseId) => dispatch(coursesAction.selectCourse(courseId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
