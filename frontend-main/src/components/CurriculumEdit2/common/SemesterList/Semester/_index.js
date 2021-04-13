import { connect } from 'react-redux';

import index from './index';
// import * as coursesAction from '../../../../../redux/courses2/action';
import * as curriculumAction from '../../../../../redux/curriculums2/action';
import * as courseDragSourceAction from '../../../../../redux/components/courseDragSource/action';

const mapStateToProps = (state, ownProps) => {
  const { allYears } = state.curriculums2;
  const { yearId, semId, index } = ownProps;
  const { courseIds } = allYears[yearId].allSems[semId];

  return {
    yearId,
    semId,
    index,
    courseIds,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    openDialog: ({ yearId, semId }) => dispatch(courseDragSourceAction.openDialog({ yearId, semId })),
    addCoursesToSemester: ({ yearId, semId, courseIds }) => dispatch(curriculumAction.addCourses({ yearId, semId, courseIds })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
