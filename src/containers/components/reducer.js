import { combineReducers } from "redux";

import home from "./Home/reducer";

const components = combineReducers({ home });

export default components;
