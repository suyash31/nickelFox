import { AsyncStorage } from 'react-native';

export default {

  async setLanguage(data) {
    try {
      await AsyncStorage.setItem('language', data.language);
    } catch (error) {
      console.log(error)
    }
  },

  async getLanguage() {
    let language = await AsyncStorage.getItem('language');
    if (!language) {
      language = 'English'
    }
    return language;
  },

  async setCountry(data) {
    try {
      await AsyncStorage.setItem('country', data.country);
    } catch (error) {
      console.log(error)
    }
  },

  async getCountry() {
    let country = await AsyncStorage.getItem('country');
    if (!country) {
      country = 'united states'
    }
    return country;
  },
}
