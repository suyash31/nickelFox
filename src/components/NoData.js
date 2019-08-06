import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

export default class NoData extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#808080'}}>Loading...</Text>
      </View>
    )
  }
}