import { connect } from 'react-redux';

import index from './index';
import * as statisticGradingActions from '../../../redux/statistics/statisticGrading/action';

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: (someFunction) => dispatch(someFunction),
    fetchStatisticGrading: () => statisticGradingActions.fetchStatisticGrading(),
  };
};

export default connect(null, mapDispatchToProps)(index);
