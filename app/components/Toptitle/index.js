'use strict';
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class Toptitle extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{this.props.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width:'100%',
    height:50,
    backgroundColor: '#78affe',
    borderBottomColor:'#ccc',
    borderBottomWidth:1
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    lineHeight:33,
    margin: 10,
    color:"#ffffff"
  },
});
