import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import EditCurriculum from './components/editCurriculum/index';
import ProgramDisplay from './components/programDisplay/index';
import CourseDetail from './components/courseDetail';

function App() {
  return (
    <Router>
      <div className="text-center">
        <Header />
        <Switch>
          <Route path='/course/:courseId'><CourseDetail /></Route>
          <Route path='/curriculum/:curriId'><EditCurriculum /></Route>
          <Route exact path='/'><ProgramDisplay /></Route>
        </Switch>
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;
