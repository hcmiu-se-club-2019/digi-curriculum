import React from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';

import Header from './Layout/Header';
import Footer from './Layout/Footer';
import Home from './Home';
import Curriculum from './Curriculum';
import CurriculumEdit from './CurriculumEdit/_index';

const isFooterEnabled = (pathname) => {
  switch (pathname) {
    case '/curriculum/edit':
      return false;
    default:
      return true;
  }
};

const Main = withRouter(({ location, props }) => (
  <>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/curriculum" component={Curriculum} />
      <Route exact path="/curriculum/edit" component={CurriculumEdit} />
    </Switch>
    {isFooterEnabled(location.pathname) ? <Footer /> : ''}
  </>
));

class App extends React.Component {
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
