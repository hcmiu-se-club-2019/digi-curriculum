import { connect } from 'react-redux';

import index from './index';
import * as coursesAction from '../../redux/courses2/action';
import * as curriculumAction from '../../redux/curriculums2/action';

const mapStateToProps = (state, ownProps) => {
  const { errorLog: coursesErrorLog, isFetching: isCoursesFetching } = state.courses2;
  const { errorLog: curriculumErrorLog, isFetching: isCurriculumFetching } = state.curriculums2;
  return {
    coursesErrorLog,
    curriculumErrorLog,
    isCoursesFetching,
    isCurriculumFetching,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    bulkDispatch: () => dispatch(coursesAction.bulkDispatch()),
    // selectCourses: (courseIds) => dispatch(coursesAction.selectCourses(courseIds)),
    dragYear: (result, provider) => dispatch(curriculumAction.dragYear(result, provider)),
    dragCourse: (result, provider) => dispatch(curriculumAction.dragCourse(result, provider))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
