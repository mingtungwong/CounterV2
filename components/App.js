import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Text,
    View
} from 'react-native';

import InitialView from './InitialView';
import CountersContainer from './CountersContainer';

class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                {
                    this.props.counters.length === 0
                    ? <InitialView />
                    : <CountersContainer />
                }
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        counters: state.counters.counters
    }
}

export default connect(mapStateToProps)(App);
