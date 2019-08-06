import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
} from 'react-native';
import { Button } from 'native-base';
import EStyleSheet from 'react-native-extended-stylesheet';

import languageCodeMapping from '../utility/languageCodeMapping';
import countryCodeMapping from '../utility/countryCodeMapping';
import ListRows from '../components/ListRows';
import { Actions } from 'react-native-router-flux';
import Application from '../app/config';

const styles = EStyleSheet.create({
  outerContainer: {
    flex: 1,
  },
  button: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  buttonSytle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollbar: {
    marginBottom: '3rem'
  },
  saveStyle: {
    fontSize: '1.1rem',
    color: '#FFF',

  }
})
const languages = ['ar', 'de', 'en', 'es', 'fr', 'he', 'it', 'nl', 'no', 'pt', 'ru', 'se', 'zh'];

const countryCode = [
  'ae', 'ar', 'at', 'au', 'be', 'bg', 'br', 'ca', 'ch', 'cn', 'co', 'cu', 'cz', 'de',
  'eg', 'fr', 'gb', 'gr', 'hk', 'hu', 'id', 'ie', 'il', 'in', 'it', 'jp', 'kr', 'lt',
  'lv', 'ma', 'mx', 'my', 'ng', 'nl', 'no', 'nz', 'ph', 'pl', 'pt', 'ro', 'ru',
  'sa', 'se', 'sg', 'si', 'sk', 'th', 'tr', 'tw', 'ua', 'us', 've', 'za'
]

export default class SelectSpecific extends Component {
  constructor(props) {
    super(props)
    this.state = {
      language: '',
      countryName: '',
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
    .then(res => this.setState({ countryName: res }))
  }

  handlePress = (screen) => {
    const { language, countryName } = this.state;
    if (screen === 'Language') {
      Application.setLanguage({language});
    } else {
      Application.setCountry({country: countryName });
    }
    Actions.home();
  }

  renderLanguageList = () => {
    return languages.map((lang) => {
      return (
          <ListRows
            component = {'SelectSpecific'}
            name = {languageCodeMapping[lang]}
            action = { () => this.setState({ language: languageCodeMapping[lang]})}
            selected = {this.state.language}
          />
      )
    })
  }

  renderCountryList = () => {
    return countryCode.map((country) => {
      return (
        <ListRows
          component = {'SelectSpecific'}
          name = {countryCodeMapping[country]}
          action = { () => this.setState({ countryName: countryCodeMapping[country]})}
          selected = {this.state.countryName}
        />
      )
    })
  }

  render() {
    const { screen } = this.props;
    return(
      <View>
        <ScrollView style={styles.scrollbar}>
          {
            screen === 'Language' ?
            this.renderLanguageList() :
            this.renderCountryList()
          }
        </ScrollView>
        <View style={styles.button}>
          <Button
            success
            large
            style = {styles.buttonSytle}
            disabled = {false}
            onPress = {() => this.handlePress(screen)}
          >
            <Text style={styles.saveStyle}>Save</Text>
          </Button>
        </View>
      </View>
    )
  }
}