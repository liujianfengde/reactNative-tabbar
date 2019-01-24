'use strict';
import React, { Component } from 'react';
import { YellowBox,StyleSheet, Text, View } from 'react-native';
import App from './view/app';

type Props = {};
export default class Root extends Component<Props> {
    constructor(props) {
        super(props);
        console.disableYellowBox = true

    };
    render() {
        return (
            <View style={styles.container}>
                <App/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
