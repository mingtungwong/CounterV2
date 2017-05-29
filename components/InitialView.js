import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Text,
    TextInput,
    View,
    Button,
    StyleSheet
} from 'react-native';

import { setPlayers } from '../reducers/counterReducer';

class InitialView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            numPlayers: 1,
            startingPoints: 1
        }
    }

    render() {
        return (
            <View>
                <TextInput
                    maxLength = {3}
                    placeholder = 'Number of Players'
                    keyboardType = 'numeric'
                    onChangeText = {(text) => this.setState({numPlayers: +text})}
                    style = {styles.input}
                />
                <TextInput
                    maxLength = {10}
                    placeholder = 'Starting Points'
                    keyboardType = 'numeric'
                    onChangeText = {(text) => this.setState({startingPoints: +text})}
                    style = {styles.input}
                />
                <Button
                    title = "Submit"
                    onPress = {() => {this.props.createPlayers(this.state.numPlayers, this.state.startingPoints)}}
                />
            </View>
        );
    }

}

const styles = StyleSheet.create(
    {
        input: {
            textAlign: 'center'
        }
    }
)

const mapDispatchToProps = (dispatch) => {
    return  {
        createPlayers: (numPlayers, startingPoints) => {
            const playersArray = new Array(numPlayers);
            for(let i = 0; i < numPlayers; i++) {
                playersArray[i] = {name: `Player ${i + 1}`, points: +startingPoints};
            }
            dispatch(setPlayers(playersArray, startingPoints));
        }
    }
}

export default connect(null, mapDispatchToProps)(InitialView);