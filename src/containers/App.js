import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import AppReducer from '../reducers';
import RootContainer from './RootContainer';
import { enhancers } from '../utils/redux';

const store = createStore(
  AppReducer,
  ...enhancers,
);
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    );
  }
}
