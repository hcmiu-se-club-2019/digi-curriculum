import { connect } from 'react-redux';

import index from './index';
import * as coursesAction from '../../../../redux/courses/action';
import * as curriculumAction from '../../../../redux/curriculums/action';

const mapStateToProps = (state, ownProps) => {
  const { allCourses } = state.courses;
  const { courseId } = ownProps;
  const { name, id, credit } = allCourses[courseId];
  return {
    name,
    id,
    credit,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeCourseFromCurriculum: ({ yearId, semId, courseId }) => dispatch(curriculumAction.removeCourse({ yearId, semId, courseId })),
    removeSelectedCourseFromCourseList: (courseId) => dispatch(coursesAction.removeSelectedCourse(courseId)),
    addCoursesToSemester: ({ yearId, semId, courseIds }) => dispatch(curriculumAction.addCourses({ yearId, semId, courseIds })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
