import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducer';

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const middlewares = [
  thunkMiddleware,
];

const enhancer = composeEnhancers(
  applyMiddleware(...middlewares),
);

export default () => createStore(reducer, enhancer);
