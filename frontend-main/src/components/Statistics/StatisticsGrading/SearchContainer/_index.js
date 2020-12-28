import { connect } from 'react-redux';

import index from './index';
import * as statisticGradingActions from '../../../../redux/statistics/statisticGrading/action';

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: (someFunction) => dispatch(someFunction),
    loadData: () => statisticGradingActions.fetchStatisticGrading(),
    loadRandomData: () => dispatch(statisticGradingActions.generateRandomData()),
  };
};

export default connect(null, mapDispatchToProps)(index);
