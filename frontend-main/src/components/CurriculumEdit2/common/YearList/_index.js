import { connect } from 'react-redux';

import index from './index';

const mapStateToProps = (state) => {
  const { allYearIdsOrder } = state.curriculums2;
  return {
    allYearIdsOrder,
  };
};

export default connect(mapStateToProps, null)(index);
