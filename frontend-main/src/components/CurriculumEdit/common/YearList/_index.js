import { connect } from 'react-redux';

import * as curriculumAction from '../../../../redux/curriculums/action';
import index from './index';

const mapStateToProps = (state) => {
  const { allYearIdsOrder } = state.curriculums;
  return {
    allYearIdsOrder,
  };
};

const mapDispatchToProps = (dispatch, getState) => {
  return {
    addYear: () => dispatch(curriculumAction.addYear()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
