'use strict';
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Toptitle from './../../components/Toptitle';

export default class Comic extends Component {
  constructor(props) {
      super(props);
      this.state = {
          title:"期刊"
      }
  }
  render() {
    return (
      <Toptitle title={this.state.title}/>
    );
  }
}

const styles = StyleSheet.create({
  
});
