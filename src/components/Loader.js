import React, { Component } from 'react';
import {
  View,
  ActivityIndicator,
  Text,
} from 'react-native';

export default class Loader extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#808080" />
      </View>
    )
  }
}