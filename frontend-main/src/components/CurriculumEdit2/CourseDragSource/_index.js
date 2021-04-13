import { connect } from 'react-redux';

import index from './index';
import * as coursesAction from '../../../redux/courses2/action';
import * as curriculumAction from '../../../redux/curriculums2/action';
import * as courseDragSourceAction from '../../../redux/components/courseDragSource/action';

const mapStateToProps = (state, ownProps) => {
  const { isOpen, yearId, semId } = state.components.courseDragSource;
  const { allCourses, allCourseIds } = state.courses2;
  return {
    isOpen,
    yearId,
    semId,
    allCourses,
    allCourseIds,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeDialog: () => dispatch(courseDragSourceAction.closeDialog()),
    addCoursesToCourseList: () => dispatch(coursesAction.addCourses()),
    addCoursesToSemester: ({ yearId, semId, courseIds }) => dispatch(curriculumAction.addCourses({ yearId, semId, courseIds })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(index);