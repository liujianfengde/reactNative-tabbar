'use strict';
import React, { Component } from 'react';
import { StyleSheet, View ,Text} from 'react-native';
import MyStackNavigator from './../navigators/TabNavigator';
export default class App extends Component {
    render() {
      return (
        <View style={styles.container}>
          <MyStackNavigator/>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});