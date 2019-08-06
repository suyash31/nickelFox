import React, { Component } from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Actions } from 'react-native-router-flux';

import * as API from '../api';
import Application from '../app/config';
import languageCodeMapping from '../utility/languageCodeMapping';
import countryCodeMapping from '../utility/countryCodeMapping';
import * as actions from '../actions';

const styles = EStyleSheet.create({
  splash: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  }
})

let langCode = [];
let countryCode = [];

class Splash extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      language: '',
      country: '',
      langCode: null,
      countryCode: null,
    }
  }

  componentDidMount = () => {
    this.getLanguage();
    this.getCountry();
  }

  getLanguage = () => {
    Application.getLanguage()
    .then(res => {
      this.setState({ language: res })
      langCode = Object.keys(languageCodeMapping).filter((key) => {
        return languageCodeMapping[key] == res
      })
      this.setState({langCode: langCode[0]})
      this.props.saveLanguageCode(langCode[0]);
    })   
  }

  getCountry = () => {
    Application.getCountry()
    .then(res => {
      this.setState({ country: res })
      countryCode = Object.keys(countryCodeMapping).filter((key) => {
        return countryCodeMapping[key] == res
      })
      this.setState({countryCode: countryCode[0]})
      this.props.saveCountryCode(countryCode[0]);
    })
  }

  render() {
    const { countryCode, langCode } = this.state;
    if (countryCode && langCode) {
      Actions.home();
    }
    return (
      <View style={styles.splash}>
        <Image
          source = {require('../images/splash.png')}
        />
      </View>
    );
  }
}


export default connect(null, actions)(Splash);