import { connect } from 'react-redux';

import index from './index';
import * as curriculumAction from '../../../../../redux/curriculums/action';
import * as courseDragSourceAction from '../../../../../redux/components/courseDragSource/action';

const mapStateToProps = (state, ownProps) => {
  const { allYears } = state.curriculums;
  const { allCourses } = state.courses;
  const { yearId, semId, index } = ownProps;
  const { courseIds } = allYears[yearId].allSems[semId];

  let creditCount = 0;
  courseIds.forEach(courseId => {
    creditCount += allCourses[courseId].credit
  })

  return {
    yearId,
    semId,
    index,
    courseIds,
    creditCount,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    openDialog: ({ yearId, semId }) => dispatch(courseDragSourceAction.openDialog({ yearId, semId })),
    addCoursesToSemester: ({ yearId, semId, courseIds }) => dispatch(curriculumAction.addCourses({ yearId, semId, courseIds })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
