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

import store from './store/store';
import InitialView from './components/InitialView';

export default class CounterV2 extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <Provider store={store}>
        {
          store.getState().counters.length
          ? <Text>test</Text>
          : <InitialView />
        }
      </Provider>
    );
  }
}

AppRegistry.registerComponent('CounterV2', () => CounterV2);
