import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import ListRows from '../components/ListRows';

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
  }

  render() {
    return(
      <View style={styles.sidebarContainer}>
        <View style={styles.profile}>
          <View style={styles.logo}>
            <Text style={styles.logoStyle}>News App</Text>
          </View>
        </View>
        <ListRows
          name = {'Language'}
          description = {'English'}
        />
        <ListRows
          name = {'Country'}
          description = {'US'}
        />
      </View>
    )
  }
}