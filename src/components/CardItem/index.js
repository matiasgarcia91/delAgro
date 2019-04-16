import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import VideoPlayer from '../../containers/VideoPlayerContainer';
import CardFooter from '../../containers/CardFooterContainer';
import DetailsCardFooter from '../../containers/DetailsCardFooterContainer';
import vendido from '../../assets/images/vendido.png';

import styles from './styles';

export default class CardItem extends Component {

  loadFullScreen = (uri) => {
    const { navigation } = this.props;
    navigation.setParams({ videofs: uri });
  }

  render() {
    const { lot, details } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.videoContainer}>
          <VideoPlayer id={lot.id} uri={lot.video_url} thumbnail={lot.thumbnail_url} status={lot.status} />
          <Icon name='expand' size={22} style={{ position: 'absolute', color: 'white', zIndex: 10, bottom: 10, left: 10 }} onPress={() => this.loadFullScreen(lot.video_url)} />
        </View>
        <View style={styles.footer}>
          { details ?
            <DetailsCardFooter lot={lot} /> :
            <CardFooter navigation={this.props.navigation} lot={lot} />
          }
        </View>
      </View>
    );
  }
}

CardItem.propTypes = {
  id: PropTypes.string,
  navigation: PropTypes.shape(),
  lot: PropTypes.shape().isRequired,
  details: PropTypes.bool,
};

CardItem.defaultProps = {
  id: null,
  navigation: {},
  details: false,
  category: '',
};
