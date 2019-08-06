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
import { Router, Scene, ActionConst } from 'react-native-router-flux';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import reducers from './reducers';
import Home from './components/Home';
import NewsFeed from './components/NewsFeed';
import WebView from './components/WebView';
import SelectSpecific from './components/SelectSpecific';
import Splash from './components/Splash';



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
              key="splash"
              component={Splash}
              hideNavBar
            />
            <Scene
              key="home"
              component={Home}
              hideNavBar
              type={ActionConst.RESET}
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
            <Scene
              key="selectSpecific"
              component={SelectSpecific}
              hideNavBar
            />
          </Scene>
        </Router>
      </Provider>
    );
  }
};
