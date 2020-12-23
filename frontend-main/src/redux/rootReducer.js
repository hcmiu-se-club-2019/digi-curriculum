import { combineReducers } from "redux";

import curriculums from "./curriculums/reducer";
import courses from "./courses/reducer";

const rootReducer = combineReducers({
  curriculums,
  courses,
});

export default rootReducer;
