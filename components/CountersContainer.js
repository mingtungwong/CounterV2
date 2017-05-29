import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Text,
    ScrollView,
    View,
    Button,
    StyleSheet,
    Dimensions
} from 'react-native';

import { addPlayer } from '../reducers/counterReducer';
import SingleCounter from './SingleCounter';

class CountersContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const counters = this.props.counters;

        return (
            <ScrollView>
                <View>
                    <Button
                        title = 'Add Player'
                        onPress = {this.props.addPlayer}
                    />
                </View>
                {
                    counters.map((obj, idx) => <SingleCounter id ={ idx } name={ obj.name } points={ obj.points } key={ idx }/>)
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
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(CountersContainer);