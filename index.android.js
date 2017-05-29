/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text
} from 'react-native';
import { Provider } from 'react-redux';

import App from './components/App'
import store from './store/store';

export default class CounterV2 extends Component {

  constructor() {
    super();
  }

  render() {
    console.log(store.getState());
    return (
      <Provider store={store}>
        {
          <App />
        }
      </Provider>
    );
  }
}

AppRegistry.registerComponent('CounterV2', () => CounterV2);
