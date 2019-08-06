import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { WebView } from 'react-native-webview';

import Header from './Header';
import Loader from './Loader';

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

  renderLoading = () => {
    return <Loader/>
  }

  render() {
    return (
      
      <View style={styles.outerContainer}>
        <Header component={'WebView'}/>
        <WebView
          source = {{ uri: this.props.url }}
          style = {{ flex: 1 }}
          renderLoading={this.renderLoading}
          startInLoadingState
        />
      </View>
    );
  }
}