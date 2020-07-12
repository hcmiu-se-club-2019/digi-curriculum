import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";

import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import EditCurriculum from "./editCurriculum";
import ProgramDisplay from "./programDisplay";
import CourseDetail from "./courseDetail";
import Home from "./Home";
import Curriculum from "./Curriculum";
// import CurriculumEdit from "./CurriculumEdit/index";
import CurriculumEdit from "./CurriculumEdit/_index";

const Main = withRouter(({ location }) => (
  <>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/curriculum" component={Curriculum} />
      <Route exact path="/curriculum/edit" component={CurriculumEdit} />
      <Route exact path="/program" component={ProgramDisplay} />
      <Route exact path="/course/:courseId" component={CourseDetail} />
      <Route
        exact
        path="/curriculum/:curriId/edit"
        component={EditCurriculum}
      />
    </Switch>
    {location.pathname !== "/curriculum/edit" ? <Footer /> : ""}
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
