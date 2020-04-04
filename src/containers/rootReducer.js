import { combineReducers } from "redux";

import subMajors from "./SubMajors/reducer";
import programType from "./ProgramType/reducer";
import englishEntrance from "./EnglishEntrance/reducer";
import curriculums from "./Curriculums/reducer";
import course from "./Courses/reducer";

const rootReducer = combineReducers({
  subMajors,
  programType,
  englishEntrance,
  curriculums,
  course
});

export default rootReducer;
