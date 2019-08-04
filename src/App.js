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
import Header from './components/Header';
import Home from './components/Home';
import Dummy from './components/Dummy';
import Categories from './components/Categories';



export default class App extends Component {
  constructor() {
    super();
    EStyleSheet.build({});
  }
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <StatusBar barStyle="light-content"/>
        {/* <Header /> */}
        <Categories />
        {/* <Router>
          <Scene key="root">
            <Scene
              key="home"
              component={Home}
              hideNavBar
            />
            <Scene
              key="dummy"
              component={Dummy}
              hideNavBar
            />
          </Scene>
        </Router> */}
      </Provider>
    );
  }
};
