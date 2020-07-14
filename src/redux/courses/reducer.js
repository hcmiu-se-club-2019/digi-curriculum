import * as Type from "./action";

import fetchState from "./data";

const initState = {};

export default function courses(state = initState, action) {
  switch (action.type) {
    case Type.RECEIVE_COURSES:
      return Object.assign({}, state, { ...fetchState });
    default:
      return state;
  }
}
