import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';

export default function configureStore(preLoadedState) {
  return createStore(
    rootReducer,
    preLoadedState,
    compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ ?  window.__REDUX_DEVTOOLS_EXTENSION__() : (func) => func)
  );
}
