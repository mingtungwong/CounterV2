/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';

import InitialView from './components/InitialView';

export default class CounterV2 extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <View>
        <InitialView />
      </View>
    );
  }
}

AppRegistry.registerComponent('CounterV2', () => CounterV2);
