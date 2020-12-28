import React, { Component } from 'react';
import Box from '@material-ui/core/Box';

import './style.scss';
import { ReactComponent as RoadBlockIcon } from '../../../icons/roadblock.svg';

class ScoreDisplayContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { dispatch, loadData, loadRandomData } = this.props

    return (
      <div className={'search-content'}>
        <Box display="flex" flexDirection="column" justifyContent="center">
          <RoadBlockIcon className={'road-block-icon'} />
          <div>This page is under development</div>
          <button onClick={() => loadRandomData()}>Random data</button>
          <button onClick={() => dispatch(loadData())}>Reset data</button>
        </Box>
      </div>
    );
  }
}

export default ScoreDisplayContainer;
