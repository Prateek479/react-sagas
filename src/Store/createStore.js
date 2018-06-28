
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { fromJS } from 'immutable';
import createReducer from '../Reducer'
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

export const history = createHistory()

const sagaMiddleware = createSagaMiddleware();
const routesMiddleware = routerMiddleware(history)

export default function configureStore(initialState = {}) {
  
  const middlewares = [sagaMiddleware,routesMiddleware];
  const store = createStore(
    createReducer(),
    fromJS(initialState),
    composeWithDevTools(applyMiddleware(...middlewares))
  );


  store.runSaga = sagaMiddleware.run;
  store.asyncReducers = {}; // Async reducer registry

  return store;
}

export function historyObject() {
  return history;
}
