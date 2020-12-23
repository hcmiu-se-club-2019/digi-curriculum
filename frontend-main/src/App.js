import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/Home";
//import Header from "./components/Layout/Header";
//import Footer from "./components/Footer";
import EditCurriculum from "./components/editCurriculum/index";
import ProgramDisplay from "./components/programDisplay/index";
import CourseDetail from "./components/courseDetail";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* <div className="text-left">
            <p>Example Links</p>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/program">Program Display</Link>
              </li>
              <li>
                <Link to="/curriculum/1/edit">Edit Curriculum</Link>
              </li>
              <li>
                <Link to="/course/IT102IU">Web Application Course</Link>
              </li>
            </ul>
          </div> */}
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
        </div>
      </Router>
    );
  }
}

export default App;
