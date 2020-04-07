import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import logo from "./logo.svg";
// import "./App.css";

import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import EditCurriculum from "./editCurriculum";
import ProgramDisplay from "./programDisplay";
import CourseDetail from "./courseDetail";
import Home from "./Home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/program" component={ProgramDisplay} />
            <Route exact path="/course/:courseId" component={CourseDetail} />
            <Route
              exact
              path="/curriculum/:curriId/edit"
              component={EditCurriculum}
            />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
