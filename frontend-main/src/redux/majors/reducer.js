import * as Type from "./action";

import fetchState from "./data";

const initState = {};

export default function courses(state = initState, action) {
  switch (action.type) {
    case Type.RECEIVE_MAJORS:
      return Object.assign({}, state, { ...fetchState });
    default:
      return state;
  }
}
