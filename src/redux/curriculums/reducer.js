import * as Type from "./action";

import fetchState from "./data";

const initState = {};

export default function curriculums(state = initState, action) {
  switch (action.type) {
    case Type.RECEIVE_CURRICULUMS:
      return Object.assign({}, state, { ...fetchState });
    default:
      return state;
  }
}
