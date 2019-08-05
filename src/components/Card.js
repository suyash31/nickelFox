import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import moment from 'moment';
import { Actions } from 'react-native-router-flux';

const styles = EStyleSheet.create({
  cardContainer: {
    padding: '1.5rem',
    paddingTop: '1rem',
    paddingBottom: '1rem',
    width: '100%',
  },
  bottomStrip: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  imageContainer: {
    paddingTop: '1rem',
    paddingBottom: '.5rem',
  },
  imageStyle: {
    width: '100%',
    height: '10rem',
    borderRadius: '.3rem',
  },
  headLineStyle: {
    fontWeight: 'bold',
    fontSize: '1.2rem',
    color: '#000'
  },
  headlineContainer: {
    paddingTop: '.2rem'
  },
  textStyle: {
    fontWeight: 'bold',
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
      <TouchableOpacity
        onPress={() => Actions.webView({url})}
        style={styles.cardContainer}
      >
        <View style={styles.headlineContainer}>
          <Text style={styles.headLineStyle}>{headline}</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source = {{ uri: urlToImage == null ? noImage : urlToImage }}
            resizeMode = 'cover'
            style={styles.imageStyle}
          />
        </View>
        <View style={styles.bottomStrip}>
          <Text style={styles.textStyle}>{moment(publishedAt).format('MMMM Do YYYY')}</Text>
          <Text style={styles.textStyle}>{author}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}