import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';
import { Container } from 'native-base';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from './Header';
import * as API from '../api';

const styles = EStyleSheet.create({
  cardContainer: {
    paddingTop: '1rem',
    width: '100%',
  },
  bottomStrip: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  imageContainer: {
    paddingTop: '.5rem',
    paddingBottom: '.2rem',
  },
  imageStyle: {
    width: '100%',
    height: '10rem',
    borderRadius: '.3rem'

  }
})
const noImage = 'http://thetechtemple.com/wp-content/themes/TechNews/images/img_not_available.jpg';
export default class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { headline, url, urlToImage, publishedAt, author } = this.props;
    return (
      <View style={styles.cardContainer}>
        <View style={styles.headlineContainer}>
          <Text>{headline}</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source = {{ uri: urlToImage == null ? noImage : urlToImage }}
            style={styles.imageStyle}
          />
        </View>
        <View style={styles.bottomStrip}>
          <Text>{publishedAt}</Text>
          <Text>{author}</Text>
        </View>
      </View>
    );
  }
}