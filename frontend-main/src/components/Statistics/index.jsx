import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import StatisticsNavBar from './StatisticsNavBar';
import StatisticsOverview from './StatisticsOverview';
import StatisticsCourses from './StatisticsCourses';
import StatisticsGrading from './StatisticsGrading/_index';
import StatisticsLearningProgress from './StatisticsLearningProgress';

class Statistics extends Component {
  render() {
    return (
      <div>
        <Router>
          <StatisticsNavBar />
          <Switch>
            <Route exact path={`${this.props.match.path}`} component={StatisticsOverview} />
            <Route exact path={`${this.props.match.path}/courses`} component={StatisticsCourses} />
            <Route exact path={`${this.props.match.path}/grading`} component={StatisticsGrading} />
            <Route exact path={`${this.props.match.path}/learning-progress`} component={StatisticsLearningProgress} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Statistics;
