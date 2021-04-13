import { connect } from 'react-redux';

import index from './index';

const mapStateToProps = (state, ownProps) => {
  const { allYears } = state.curriculums2;
  const { yearId, index } = ownProps;
  const { allSemIdsOrder } = allYears[yearId];
  return {
    yearId,
    index,
    allSemIdsOrder,
  };
};

export default connect(mapStateToProps, null)(index);
