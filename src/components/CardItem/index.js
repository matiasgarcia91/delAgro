import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import VideoPlayer from '../../containers/VideoPlayerContainer';
import CardFooter from '../../containers/CardFooterContainer';
import DetailsCardFooter from '../../containers/DetailsCardFooterContainer';

import styles from './styles';

export default class CardItem extends Component {
  render() {
    const { lot, details } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.videoContainer}>
          <VideoPlayer id={this.props.lot.id} uri={lot.video_url} />
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
