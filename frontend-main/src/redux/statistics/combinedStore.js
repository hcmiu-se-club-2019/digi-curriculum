import { combineReducers } from 'redux';

import StatisticsGrading from './statisticGrading/reducer';

export const combinedReducer = combineReducers({
  StatisticsGrading
});

export default combinedReducer;
