import { combineReducers } from 'redux';

import components from './components/combinedReducer';
import curriculums from './curriculums/reducer';
import courses from './courses/reducer';
import Statistics from './statistics/combinedStore';

const rootReducer = combineReducers({
  components,
  curriculums,
  courses,
  Statistics,
});

export default rootReducer;
