import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native';

export default class InitialView extends Component {

    constructor() {
        super();
        this.state = {
            numPlayers: 0,
            startingPoints: 0
        }
    }

    render() {
        return (
            <View>
                <Text>Filler</Text>
            </View>
        );
    }

}