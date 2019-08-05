/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, Component} from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import reducers from './reducers';
import Home from './components/Home';
import NewsFeed from './components/NewsFeed';
import WebView from './components/WebView';



export default class App extends Component {
  constructor() {
    super();
    EStyleSheet.build({});
  }
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <StatusBar barStyle="light-content"/>
        <Router>
          <Scene key="root">
            <Scene
              key="home"
              component={Home}
              hideNavBar
            />
            <Scene
              key="newsFeed"
              component={NewsFeed}
              hideNavBar
            />
            <Scene
              key="webView"
              component={WebView}
              hideNavBar
            />
          </Scene>
        </Router>
      </Provider>
    );
  }
};
