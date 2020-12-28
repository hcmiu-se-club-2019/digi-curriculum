import React, { Component } from 'react';
import { Grid } from '@material-ui/core';

import './style.scss';
// import './CourseGrading.scss';
import SearchContainer from './SearchContainer/_index';
import ScoreDisplayContainer from './ScoreDisplayContainer';

class StatisticsGrading extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const { dispatch, fetchStatisticGrading } = this.props;
    dispatch(fetchStatisticGrading());
  }

  render() {
    return (
      <div className={'statistic-grading-container'}>
        <Grid container>
          <Grid item xs={12} sm={12} md={3} lg={2} xl={2} className={'search-container'}>
            <SearchContainer />
          </Grid>
          <Grid item xs={12} sm={12} md={9} lg={10} xl={10} className={'score-display-container'}>
            <ScoreDisplayContainer />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default StatisticsGrading;
