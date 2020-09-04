// import React, { Component } from "react";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
  Redirect,
} from "react-router-dom";

import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import ProgramDisplay from "./programDisplay";
import CourseDetail from "./courseDetail";
import Home from "./Home";
import Curriculum from "./Curriculum";
import CurriculumEdit from "./CurriculumEdit/_index";
import UserProvider from "./contexts/userProvider"

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
      </UserProvider>
    </Switch>
    {(location.pathname !== "/curriculum/edit")? <Footer /> : ""}
  </>
));

function App() {
  return (
    <div className="App">
      <Router>
        <Main />
      </Router>
    </div>
  );
}

export default App;
