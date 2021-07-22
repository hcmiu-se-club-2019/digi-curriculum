import { combineReducers } from "redux";

// import home from "../containers/components/Home/reducer";
// import majors from "../containers/Majors/reducer";
// import subMajors from "../containers/SubMajors/reducer";
// import programTypes from "../containers/ProgramType/reducer";
// import englishEntrances from "../containers/EnglishEntrances/reducer";
import curriculums from "./curriculums/reducer";
import courses from "./courses/reducer";
import courseDetail from "./courseDetail/Reducer";
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
  courseDetail
  // components
});

export default rootReducer;
