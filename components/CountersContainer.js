import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Text,
    ScrollView,
    View,
    Button,
    Alert,
    StyleSheet,
    Dimensions
} from 'react-native';

import { addPlayer, setPlayers } from '../reducers/counterReducer';
import SingleCounter from './SingleCounter';

class CountersContainer extends Component {

    constructor(props) {
        super(props);
        this.resetScores = this.resetScores.bind(this);
    }

    resetScores() {
        const newCounters = [].concat(this.props.counters);
        const startingPoints = this.props.startingPoints;
        for(let i = 0; i < newCounters.length; i++) {
            newCounters[i].points = startingPoints;
        }
        this.props.resetPlayers(newCounters, this.props.startingPoints);
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container} >
                    <Button
                        title = 'Add Player'
                        onPress = {this.props.addPlayer}
                    />
                    <Button
                        title = "Reset Scores"
                        onPress = {this.resetScores}
                    />
                </View>
                {
                    this.props.counters.map((obj, idx) => <SingleCounter id ={ idx } name={ obj.name } points={ obj.points } key={ idx }/>)
                }
            </ScrollView>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        counters: state.counters.counters,
        startingPoints: state.counters.startPoints
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPlayer: () => {
            dispatch(addPlayer())
        },
        resetPlayers: (players, startPoints) => {
            dispatch(setPlayers(players, startPoints));
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(CountersContainer);