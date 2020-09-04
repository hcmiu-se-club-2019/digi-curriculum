import { createStore, applyMiddleware, compose } from "redux";

import rootReducer from "./containers/rootReducer";

export default function configureStore(preLoadedState) {
  return createStore(
    rootReducer,
    preLoadedState,
    compose(
      applyMiddleware(),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
}
