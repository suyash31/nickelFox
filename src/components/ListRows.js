import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const styles = EStyleSheet.create({

  horizontalLine: {
    borderBottomWidth: '.1rem',
    borderBottomColor: '#C1C1C1'
  },
  rowContainer: {
    flexDirection: 'row',
    paddingTop: '1.5rem',
    paddingBottom: '1.5rem',
    width: '100%',
    justifyContent: 'space-between'
  },
  arrowContainer: {
    paddingLeft: '2rem',
    paddingRight: '.5rem',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContainer: {
    flex: 1,
    marginLeft: '1.5rem',
    marginRight: '.5rem',
    justifyContent: 'center',
  },
  listTxtStyle: {
    fontSize: '1.3rem',
    color: '#808080'
  },
})

class ListRows extends Component {
  constructor() {
    super();
  }

  render() {
    const { name, description, action } = this.props;
    return (
      <View>
        <TouchableOpacity
          onPress={action}
          style={styles.rowContainer}
        >
          <View style={styles.listContainer}>
            <Text style={styles.listTxtStyle}>{name}</Text>
            <Text>{description}</Text>
          </View>
          <View style={styles.arrowContainer}>
            <Icon name="chevron-right" size={40} color="#E1E1E1" /> 
          </View>
        </TouchableOpacity>
        <View style={styles.horizontalLine}/>
      </View>
    );
  }
}

export default connect(null, null)(ListRows);