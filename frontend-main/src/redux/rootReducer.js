import { combineReducers } from "redux";

// import home from "../containers/components/Home/reducer";
// import majors from "../containers/Majors/reducer";
// import subMajors from "../containers/SubMajors/reducer";
// import programTypes from "../containers/ProgramType/reducer";
// import englishEntrances from "../containers/EnglishEntrances/reducer";
import curriculums from "./curriculums/reducer";
import courses from "./courses/reducer";

// const components = combineReducers({
//   home,
// })

const rootReducer = combineReducers({
  // majors,
  // subMajors,
  // programTypes,
  // englishEntrances,
  curriculums,
  courses,
  // components
});

export default rootReducer;
