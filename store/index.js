import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { persistStore, persistReducer } from 'redux-persist';
import { AsyncStorage } from 'react-native';
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


const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['colors'],
};

const persistedReducer = persistReducer(persistConfig, reducer);

export default () => {
  let store = createStore(persistedReducer, enhancer);
  let persistor = persistStore(store);
  return { store, persistor };
}
