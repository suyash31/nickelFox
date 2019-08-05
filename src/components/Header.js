import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Actions } from 'react-native-router-flux';

import rem from '../app/scale';

const styles = EStyleSheet.create({
  $rem: rem,

  container: {
    width: '100%',
    height: '4rem',
    backgroundColor: '#FFF',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  menuContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchContainer: {
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  searchBox: {
    width: '70%',
    height: '3rem',
    borderColor: '#A1A1A1',
    borderBottomWidth: '.05rem',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  justify: {
    justifyContent: 'center'
  },
  placeholder: {
    fontSize: '1.1rem',
    color: '#A1A1A1',
  }
})

export default class Header extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { component } = this.props;
    return(
      <View style={styles.container}>
        <TouchableOpacity 
          onPress={component === 'Home' ? () => alert('asdlfk') : () => Actions.pop()}
          style={styles.menuContainer}
        >
          {
            component === 'Home' ?
            <Icon name='menu' size={30} color='#A1A1A1' /> :
            <Icon name='arrow-left' size={30} color='#A1A1A1' />
          }
        </TouchableOpacity>
        {
          component !== 'WebView' ?
          <View style={styles.searchContainer}>
            <TouchableWithoutFeedback
              onPress={() => {}}
            >
              <View style={styles.searchBox}>
                <View style={styles.justify}>
                  <Text style={styles.placeholder}> Search News ...</Text>
                </View>
                <View style={styles.justify}>
                  <Icon name='magnify' size={25} color='#A1A1A1' />
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View> :
          <View style={styles.searchContainer} />
        }
      </View>
    );
  }
}