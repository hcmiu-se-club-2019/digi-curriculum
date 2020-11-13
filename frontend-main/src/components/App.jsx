// import React, { Component } from "react";
import React from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter, Redirect } from 'react-router-dom';

import Header from './Layout/Header';
import Footer from './Layout/Footer';
import EditCurriculum from './editCurriculum';
import ProgramDisplay from './programDisplay';
import CourseDetail from './courseDetail';
import Home from './Home';
import Curriculum from './Curriculum';
// import CurriculumEdit from "./CurriculumEdit/index";
import Statistics from './Statistics';

import CurriculumEdit from './CurriculumEdit/_index';
import UserProvider from './contexts/userProvider';

const isFooterEnabled = (pathname) => {
  switch (pathname) {
    case '/curriculum/edit':
    case '/statistics':
    case '/statistics/grading':
    case '/statistics/courses':
      return false;
    default:
      return true;
  }
};

const Main = withRouter(({ location, props }) => (
  <>
    <Switch>
      <UserProvider>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/curriculum" component={Curriculum} />
        <Route exact path="/curriculum/edit" component={CurriculumEdit} />
        <Route exact path="/program" component={ProgramDisplay} />
        <Route exact path="/course/:courseId" component={CourseDetail} />
        <Route exact path="/curriculum/:curriId/edit" component={EditCurriculum} />
        <Route path="/statistics" component={Statistics} />
      </UserProvider>
    </Switch>
    {isFooterEnabled(location.pathname) ? <Footer /> : ''}
  </>
));

class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <Router>
          <Main />
        </Router>
      </div>
    );
  }
}

export default App;
