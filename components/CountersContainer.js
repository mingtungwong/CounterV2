import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Text,
    ScrollView,
    Button,
    StyleSheet
} from 'react-native';

import SingleCounter from './SingleCounter'

class CountersContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const counters = this.props.counters;

        return (
            <ScrollView>
                {
                    counters.map((obj, idx) => <SingleCounter name={ obj.name } points={ obj.points } key={ idx }/>)
                }
            </ScrollView>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        counters: state.counters
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

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