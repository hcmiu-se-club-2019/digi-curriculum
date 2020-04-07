import { combineReducers } from "redux";

import home from "./components/Home/reducer";
import majors from "./Majors/reducer";
import subMajors from "./SubMajors/reducer";
import programTypes from "./ProgramType/reducer";
import englishEntrances from "./EnglishEntrances/reducer";
import curriculums from "./Curriculums/reducer";
import courses from "./Courses/reducer";

const components = combineReducers({
  home,
})

const rootReducer = combineReducers({
  majors,
  subMajors,
  programTypes,
  englishEntrances,
  curriculums,
  courses,
  components
});

export default rootReducer;
