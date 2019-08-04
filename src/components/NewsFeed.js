import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList
} from 'react-native';
import { Container } from 'native-base';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from './Header';
import Card from './Card';
import * as API from '../api';

const styles = EStyleSheet.create({
  outerContainer: {
    flex: 1,
    paddingBottom: '13rem',
    backgroundColor: '#FFF'
  },
  mainContainer: {
    padding: '1.5rem',
    paddingTop: '.5rem',
  },
  topStory: {
    fontWeight: 'bold',
    fontSize: '1.2rem',
    color: '#3D3D3D'
  },
  sourceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: '.5rem'
  },
  name: {
    paddingLeft: '.5rem',
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#A1A1A1'
  }
})

export default class NewsFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsFeed: [],
    }
  }

  componentDidMount = () => {
    this.getNewsFeed();
  }

  getNewsFeed = () => {
    const { id } = this.props;
    API.getNewsFeed(id)
    .then(res => {
      if (res.status == 'ok') {
        this.setState({ newsFeed: res.articles}, () => {
          console.warn(this.state.newsFeed)
        })
      }
    })
  }

  renderCard = ({item}) => {
    return (
      <Card
        headline = {item.title}
        url = {item.url}
        urlToImage = {item.urlToImage}
        publishedAt = {item.publishedAt}
        author = {item.author}
      />
    )
  }

  render() {
    const { newsFeed } = this.state;
    const { sourceName } = this.props;
    return (
      <View style={styles.outerContainer}>
        <Header component={'NewsFeed'}/>
        <View style={styles.mainContainer}>
          <Text style={styles.topStory}>Top Stories</Text>
          <View style={styles.sourceContainer}>
            <Icon name={'newspaper'} size={30} color={'#A1A1A1'} />
            <Text style={styles.name}>{sourceName}</Text>
          </View>
          <View style={styles.newsFeedContainer}>
            <FlatList
              data={newsFeed}
              renderItem={({item}) => this.renderCard({item})}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </View>
      </View>
    );
  }
}