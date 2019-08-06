import React, { Component } from 'react';
import {
  View,
  FlatList,
  Text,
} from 'react-native';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Actions } from 'react-native-router-flux';

import * as API from '../api';
import * as actions from '../actions';
import ListRows from './ListRows';
import Loader from './Loader';
import NoData from './NoData';

const styles = EStyleSheet.create({
  cardContainer: {
    width: '100%',
    borderWidth: 0,
    marginBottom: '1rem',
    shadowColor: '#808080',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: '.05rem',
  },
  headingContainer: {
    paddingTop: '.5rem',
    paddingLeft: '.5rem'
  },
  descContainer: {
    padding: '.5rem'
  },
  headingStyle: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#696969'
  }
})

class SourceList extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      language: '',
      country: '',
      loading: false,
    }
    this.getSources();
  }

  getSources = () => {
    this.setState({ loading: true })
    const { category, saveSourceList, codes } = this.props;
    
    API.getSources(category, langCode = codes.langCode, countryCode = codes.countryCode)
    .then(res => {
      if (res.status == 'ok') {
        saveSourceList(category, res.sources)
        this.setState({ loading: false })
      } else {
        alert('Something went wrong...')
      }
    })
  }

  renderCard = ({item}) => {
    return (
      <ListRows
        name = {item.name}
        description = {item.description}
        showsVerticalScrollIndicator = {false}
        action = {() => Actions.newsFeed({id:item.id, sourceName: item.name})}
      />
    )
  }

  render() {
    const { loading } = this.state;
    const { category, sources } = this.props;

    if (loading) {
      return 
    }
    return (
      <View>
        {
          loading ?
          <Loader /> :
          <FlatList
            data={sources[category]}
            renderItem={({item}) => this.renderCard({item})}
            keyExtractor={(item, index) => index.toString()}
          />
        }
      </View>
    );
  }
}

mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps, actions)(SourceList);