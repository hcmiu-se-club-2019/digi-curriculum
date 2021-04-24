import { connect } from 'react-redux';

import index from './index';
import * as coursesAction from '../../../../redux/courses/action';

const mapStateToProps = (state, ownProps) => {
  const { allMajors, allMajorIds, allCourses, allCourseIds, errorLog, isFetching } = state.courses;
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
