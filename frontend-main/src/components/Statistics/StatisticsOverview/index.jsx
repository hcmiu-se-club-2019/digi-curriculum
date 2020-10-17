import React, { Component } from 'react';
import Box from '@material-ui/core/Box';

import { ReactComponent as RoadBlockIcon } from '../../icons/roadblock.svg';

class StatisticsOverview extends Component {
  render() {
    return (
      <div>
        <Box display="flex" flexDirection="column" justifyContent="center" padding='40px'>
          <RoadBlockIcon style={{ width: '40px', height: '40px', fill: 'grey', display: 'block', margin: 'auto' }} />
          <div style={{ textAlign: 'center' }}>This page is under development</div>
        </Box>
      </div>
    );
  }
}

export default StatisticsOverview;
