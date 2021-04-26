import { connect } from 'react-redux';

import * as curriculumAction from '../../../../../redux/curriculums/action';
import index from './index';

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
    removeYear: () => dispatch(curriculumAction.removeYear({ yearId, yearIndex })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
