import { combineReducers } from 'redux'

import courseDragSource from './courseDragSource/reducer';

const components = combineReducers({
  courseDragSource,
});

export default components;
