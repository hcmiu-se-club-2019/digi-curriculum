import { connect } from 'react-redux';

import index from './index';
import * as statisticGradingActions from '../../../../../redux/statistics/statisticGrading/action';

const mapStateToProps = (state, ownProps) => {
  const { allStudentIds, allCourseIds, isAllStudentsSelected } = state.Statistics.StatisticsGrading;
  return {
    studentCount: allStudentIds.length,
    courseCount: allCourseIds.length,
    isAllStudentsSelected,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: (someFunction) => dispatch(someFunction),
    handleSelectAllStudents: () => statisticGradingActions.selectAllStudents(),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
