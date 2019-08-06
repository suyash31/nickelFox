import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PTRView from 'react-native-pull-to-refresh';
import Header from './Header';
import Card from './Card';
import * as API from '../api';

const styles = EStyleSheet.create({
  outerContainer: {
    flex: 1,
    paddingBottom: '12.5rem',
    backgroundColor: '#FFF'
  },
  mainContainer: {
    paddingTop: '.5rem',
  },
  topStory: {
    paddingLeft: '1.5rem',
    fontWeight: 'bold',
    fontSize: '1.2rem',
    color: '#3D3D3D'
  },
  sourceContainer: {
    paddingTop: '1.5rem',
    paddingLeft: '1.5rem',
    paddingBottom: '.5rem',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: '.5rem'
  },
  name: {
    paddingLeft: '.5rem',
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#808080'
  },
  cardContainer: {
    borderBottomColor: '#3D3D3D',
    shadowColor: '#808080',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: '.05rem',
  }
})

export default class NewsFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsFeed: [],
      loading: false,
    }
  }

  componentDidMount = () => {
    this.getNewsFeed();
  }

  getNewsFeed = () => {
    this.setState({ loading: true })
    const { id } = this.props;
    API.getNewsFeed(id)
    .then(res => {
      if (res.status == 'ok') {
        this.setState({ newsFeed: res.articles, loading: false})
      }
    })
  }

  _refresh = () => {
    this.getNewsFeed();
  }

  renderCard = ({item}) => {
    return (
      <View style={styles.cardContainer}>
        <Card
          headline = {item.title}
          url = {item.url}
          urlToImage = {item.urlToImage}
          publishedAt = {item.publishedAt}
          author = {item.author}
        />
      </View>
    )
  }

  render() {
    const { newsFeed, loading } = this.state;
    const { sourceName } = this.props;
    return (
      <View style={styles.outerContainer}>
        <Header component={'NewsFeed'}/>
        <View style={styles.mainContainer}>
          <Text style={styles.topStory}>Top Stories</Text>
          <View style={styles.sourceContainer}>
            <Icon name={'newspaper'} size={30} color={'#808080'} />
            <Text style={styles.name}>{sourceName}</Text>
          </View>
          <PTRView onRefresh={this._refresh} >
            <FlatList
              data={newsFeed}
              renderItem={({item}) => this.renderCard({item})}
              keyExtractor={(item, index) => index.toString()}
            />
          </PTRView>
        </View>
      </View>
    );
  }
}