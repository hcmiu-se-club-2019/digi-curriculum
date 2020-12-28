import { connect } from 'react-redux';

import index from './index';
import * as statisticGradingActions from '../../../../../redux/statistics/statisticGrading/action';

const mapStateToProps = (state, ownProps) => {
  const { allCourses, allCourseIds, selectedHeader, allSortHeaders, isAllCoursesSelected } = state.Statistics.StatisticsGrading;
  return {
    allCourses,
    allCourseIds,
    selectedHeader,
    allSortHeaders,
    isAllCoursesSelected,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: (someFunction) => dispatch(someFunction),
    handleSelectAllCourses: () => statisticGradingActions.selectAllCourses(),
    handleSelectCourse: (courseId) => statisticGradingActions.selectCourse(courseId),
    sortGPA: (order) => statisticGradingActions.sortGPA(order),
    sortAverageScore: (order) => statisticGradingActions.sortAverageScore(order),
    sortScoreByOneCourse: (courseId, order) => statisticGradingActions.sortScoreByOneCourse(courseId, order),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
