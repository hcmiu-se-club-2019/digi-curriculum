import { connect } from 'react-redux';

import * as coursesAction from '../../../../../redux/courses/action';
import * as curriculumAction from '../../../../../redux/curriculums/action';
import index from './index';

function bulkRemove({ yearId, yearIndex }) {
  return async (dispatch, getState) => {
    let courseIds = [];
    const { allSems, allSemIdsOrder } = getState().curriculums.allYears[yearId];
    allSemIdsOrder.forEach((semId) => {
      courseIds.push(...allSems[semId].courseIds);
    });

    dispatch(coursesAction.removeSelectedCourses(courseIds));
    dispatch(curriculumAction.removeYear({ yearId, yearIndex }));
  };
}

const mapStateToProps = (state, ownProps) => {
  const { allYears } = state.curriculums;
  const { yearId, index } = ownProps;
  const { allSemIdsOrder } = allYears[yearId];
  return {
    yearId,
    index,
    allSemIdsOrder,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { yearId, index: yearIndex } = ownProps;
  return {
    removeYear: () => dispatch(bulkRemove({ yearId, yearIndex })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
