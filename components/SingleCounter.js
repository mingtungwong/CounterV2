import React, { Component } from 'react';
import {
    Text,
    TextInput,
    Button,
    View,
    StyleSheet,
    Dimensions
} from 'react-native';
import { connect } from 'react-redux';

import updatePlayer from '../reducers/counterReducer';

class SingleCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            points: props.points
        }
    }

    changePoints(amount) {
        this.props.update(this.props.id, this.state.name, this.state.points + amount);
    }

    changeName(name) {
        this.props.update(this.props.id, name, this.state.points);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.nameBox}>
                    <TextInput
                        maxLength = { 10 }
                        defaultValue = { this.props.name }
                        style = {{textAlign: 'center'}}
                    />
                </View>
                <View style = {styles.container2}>
                    <Button
                        title = '-'
                        onPress = {() => this.setState({points: this.state.points - 1})}
                    />
                    <Text style={{fontWeight: 'bold', fontSize: 20, color: 'black'}}>{this.state.points}</Text>
                    <Button
                        title = '+'
                        onPress = {() => this.setState({points: this.state.points + 1})}
                    />
                </View>
            </View>
        );
    }
}

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    },
    container2: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    nameBox: {
        width: width * .4
    }
})

const mapDispatchToProps = (dispatch) => {
    return {
        update: (id, name, points) => {
            dispatch(updatePlayer(id, name, points));
        }
    }
}

export default connect(null, mapDispatchToProps)(SingleCounter);