import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import AppReducer from '../reducers';
import RootContainer from './RootContainer';
import { enhancers } from '../utils/redux';

export const store = createStore(
  AppReducer,
  ...enhancers,
);

const persistor = persistStore(store);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RootContainer />
        </PersistGate>
      </Provider>
    );
  }
}
