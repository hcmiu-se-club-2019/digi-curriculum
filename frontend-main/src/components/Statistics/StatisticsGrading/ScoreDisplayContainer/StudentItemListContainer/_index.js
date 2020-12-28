import { connect } from 'react-redux';

import index from './index';
import * as statisticGradingActions from '../../../../../redux/statistics/statisticGrading/action';

const mapStateToProps = (state, ownProps) => {
  const { allStudents, allStudentIds, allCourses, allCourseIds, allSortHeaders } = state.Statistics.StatisticsGrading;
  return {
    allStudents,
    allStudentIds,
    allCourses,
    allCourseIds,
    allSortHeaders,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: (someFunction) => dispatch(someFunction),
    handleSelectStudent: (studentId) => statisticGradingActions.selectStudent(studentId),
    sortTopCourseByOneStudent: (studentId, order) => statisticGradingActions.sortTopCourseByOneStudent(studentId, order),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
