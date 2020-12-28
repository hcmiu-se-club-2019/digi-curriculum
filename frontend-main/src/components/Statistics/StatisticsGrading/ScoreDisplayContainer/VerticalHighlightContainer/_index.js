import { connect } from 'react-redux';

import index from './index';
import * as statisticGradingActions from '../../../../../redux/statistics/statisticGrading/action';

const mapStateToProps = (state, ownProps) => {
  const { maxHeightBoxHighlight, allCourses, allCourseIds } = state.Statistics.StatisticsGrading;
  return {
    maxHeightBoxHighlight,
    allCourses,
    allCourseIds,
  };
};

export default connect(mapStateToProps, null)(index);
