import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import ListRows from '../components/ListRows';
import { Actions } from 'react-native-router-flux';
import Application from '../app/config';

const styles = EStyleSheet.create({
  sidebarContainer: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  profile: {
    width: '100%',
    height: '12rem',
    backgroundColor: '#B1B1B1',
    justifyContent: 'center'
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoStyle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#FFF'
  }
})

export default class SideBar extends Component {
  constructor() {
    super()

    this.state = {
      language: '',
      country: '',
    }
  }

  componentDidMount = () => {
    this.getLanguage();
    this.getCountry();
  }

  getLanguage = () => {
    Application.getLanguage()
    .then(res => this.setState({ language: res }))
  }

  getCountry = () => {
    Application.getCountry()
    .then(res => this.setState({ country: res }))
  }

  render() {
    const { language, country } = this.state;
    return(
      <View style={styles.sidebarContainer}>
        <View style={styles.profile}>
          <View style={styles.logo}>
            <Text style={styles.logoStyle}>News App</Text>
          </View>
        </View>
        <ListRows
          name = {'Language'}
          description = {language}
          action = {() => Actions.selectSpecific({screen: 'Language'})}
        />
        <ListRows
          name = {'Country'}
          description = {`${country.charAt(0).toUpperCase()}${country.slice(1)}`}
          action = {() => Actions.selectSpecific({screen: 'Country'})}
        />
      </View>
    )
  }
}