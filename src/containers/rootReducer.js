import { combineReducers } from "redux";

import majors from "./Majors/reducer";
import subMajors from "./SubMajors/reducer";
import programTypes from "./ProgramType/reducer";
import englishEntrances from "./EnglishEntrances/reducer";
import curriculums from "./Curriculums/reducer";
import courses from "./Courses/reducer";
import components from "./components/reducer";

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
