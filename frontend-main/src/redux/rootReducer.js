import { combineReducers } from 'redux';

// import home from "../containers/components/Home/reducer";
// import majors from "../containers/Majors/reducer";
// import subMajors from "../containers/SubMajors/reducer";
// import programTypes from "../containers/ProgramType/reducer";
// import englishEntrances from "../containers/EnglishEntrances/reducer";
import components from './components/combinedReducer';
import curriculums from './curriculums/reducer';
import curriculums2 from './curriculums2/reducer';
import courses from './courses/reducer';
import courses2 from './courses2/reducer';
import Statistics from './statistics/combinedStore';

// const components = combineReducers({
//   home,
// })

const rootReducer = combineReducers({
  // majors,
  // subMajors,
  // programTypes,
  // englishEntrances,
  components,
  curriculums,
  curriculums2,
  courses,
  courses2,
  Statistics,
});

export default rootReducer;
