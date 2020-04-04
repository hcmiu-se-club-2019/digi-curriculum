import React from 'react';
// import {  } from 'react-router';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import EditCurriculum from './components/editCurriculum/index';
// import ProgramDisplay from './components/programDisplay/index';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <div className='container' id="content">Content of page</div> */}
      {/* <ProgramDisplay /> */}
      <EditCurriculum />
      <Footer />
    </div>
  );
}

export default App;
