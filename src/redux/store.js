import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import Immutable from 'immutable';
import immutableTransform from 'redux-persist-transform-immutable';
import storage from 'redux-persist/lib/storage';
import rootReducer from '@/redux/reducers';
import { KEY_PERSIST_STORE } from '@/config';

const persistConfig = {
  transforms: [immutableTransform()],
  key: KEY_PERSIST_STORE,
  storage, // localStorage
  // blacklist: ['food'],
  whitelist: ['auth', 'restaurant', 'order'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  serialize: {
    immutable: Immutable
  }
}) || compose;

export default () => {
  const store = createStore(
    persistedReducer,
    composeEnhancer(applyMiddleware()),
  );
  const persistor = persistStore(store);
  return { store, persistor };
};
