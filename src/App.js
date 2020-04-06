import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
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
        <div className='text-left'>
          <p>Example Links</p>
          <ul>
            <li>
              <Link to="/">Program Display</Link>
            </li>
            <li>
              <Link to="/curriculum/1/edit">Edit Curriculum</Link>
            </li>
            <li>
              <Link to="/course/IT102IU">Web Application Course</Link>
            </li>
          </ul>
        </div>
        <Switch>
          <Route path='/course/:courseId' component={CourseDetail}></Route>
          <Route path='/curriculum/:curriId/edit'><EditCurriculum /></Route>
          <Route exact path='/'><ProgramDisplay /></Route>
        </Switch>
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;
