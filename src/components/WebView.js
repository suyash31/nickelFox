import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { WebView } from 'react-native-webview';

import Header from './Header';

const styles = EStyleSheet.create({
  outerContainer: {
    flex: 1,
  }
})

export default class NewsFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      
      <View style={styles.outerContainer}>
        <Header component={'WebView'}/>
        <WebView
          source = {{ uri: this.props.url }}
          style = {{ flex: 1 }}
        />
      </View>
    );
  }
}