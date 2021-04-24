import { connect } from 'react-redux';

import index from './index';
import * as coursesAction from '../../redux/courses/action';
import * as curriculumAction from '../../redux/curriculums/action';

const mapStateToProps = (state, ownProps) => {
  const { errorLog: coursesErrorLog, isFetching: isCoursesFetching } = state.courses;
  const { errorLog: curriculumErrorLog, isFetching: isCurriculumFetching, allYearIdsOrder } = state.curriculums;
  const yearCount = allYearIdsOrder.length;
  return {
    coursesErrorLog,
    curriculumErrorLog,
    isCoursesFetching,
    isCurriculumFetching,
    yearCount,
  };
};

const mapDispatchToProps = (dispatch, getState) => {
  return {
    bulkDispatch: () => dispatch(coursesAction.bulkDispatch()),
    // selectCourses: (courseIds) => dispatch(coursesAction.selectCourses(courseIds)),
    dragYear: (result, provider) => dispatch(curriculumAction.dragYear(result, provider)),
    dragCourse: (result, provider) => dispatch(curriculumAction.dragCourse(result, provider)),
    checkCurriculum: () => dispatch(),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
