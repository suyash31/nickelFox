import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
} from 'react-native';
import { Button } from 'native-base';
import EStyleSheet from 'react-native-extended-stylesheet';
import { connect } from 'react-redux';

import languageCodeMapping from '../utility/languageCodeMapping';
import countryCodeMapping from '../utility/countryCodeMapping';
import ListRows from '../components/ListRows';
import { Actions } from 'react-native-router-flux';
import Application from '../app/config';
import * as actions from '../actions';

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

const countries = [
  'ae', 'ar', 'at', 'au', 'be', 'bg', 'br', 'ca', 'ch', 'cn', 'co', 'cu', 'cz', 'de',
  'eg', 'fr', 'gb', 'gr', 'hk', 'hu', 'id', 'ie', 'il', 'in', 'it', 'jp', 'kr', 'lt',
  'lv', 'ma', 'mx', 'my', 'ng', 'nl', 'no', 'nz', 'ph', 'pl', 'pt', 'ro', 'ru',
  'sa', 'se', 'sg', 'si', 'sk', 'th', 'tr', 'tw', 'ua', 'us', 've', 'za'
]

let langCode = [];
let countryCode = [];
class SelectSpecific extends Component {
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
    this.setState({ loading: true })
    if (screen === 'Language') {
      Application.setLanguage({language});
      langCode = Object.keys(languageCodeMapping).filter((key) => {
        return languageCodeMapping[key] == language
      })
      // this.setState({langCode: langCode[0]})
      this.props.saveLanguageCode(langCode[0]);
    } else {
      Application.setCountry({country: countryName });
      countryCode = Object.keys(countryCodeMapping).filter((key) => {
        return countryCodeMapping[key] == countryName
      })
      // this.setState({countryCode: countryCode[0]})
      this.props.saveCountryCode(countryCode[0]);
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
    return countries.map((country) => {
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
    const { loading } = this.state;
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
            <Text style={styles.saveStyle}>{loading ? 'Loading ...' : 'Save'}</Text>
          </Button>
        </View>
      </View>
    )
  }
}

export default connect(null, actions)(SelectSpecific)