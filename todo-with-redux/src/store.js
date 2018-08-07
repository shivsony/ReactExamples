import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import math from './reducer/mathReducer';
import user from './reducer/userReducer';

var disp = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const myLogger = (store) => (next) => (action) => {
  console.log("looger action", action);
  next(action);
}

console.log(myLogger());

export default createStore(combineReducers({math: math,user: user}),
  {},
  disp,
  applyMiddleware(logger)
);
