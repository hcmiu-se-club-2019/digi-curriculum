import * as Type from "./action";

import fetchState from "./data";

const initState = {};

export default function englishEntrances(state = initState, action) {
  switch (action.type) {
    case Type.RECEIVE_ENGLISH_ENTRANCES:
      return Object.assign({}, state, { ...fetchState });
    default:
      return state;
  }
}
