import { connect } from 'react-redux';

import index from './index';
import * as statisticGradingActions from '../../../../redux/statistics/statisticGrading/action';

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: (someFunction) => dispatch(someFunction),
    loadData: () => statisticGradingActions.loadData(dispatch),
    loadRandomData: () => statisticGradingActions.loadRandomData(dispatch),
  };
};

export default connect(null, mapDispatchToProps)(index);
