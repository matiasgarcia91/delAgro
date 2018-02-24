import React, { PureComponent } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import VideoPlayer from '../../containers/VideoPlayerContainer';
import CardFooter from '../CardFooter';

import styles from './styles';

export default class CardItem extends PureComponent {
  render() {
    const { lot } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.videoContainer}>
          <VideoPlayer id={this.props.id} uri={lot.uri} />
        </View>
        <View style={styles.footer}>
          <CardFooter navigation={this.props.navigation} lot={lot} />
        </View>
      </View>
    );
  }
}

CardItem.propTypes = {
  id: PropTypes.string,
  navigation: PropTypes.shape().isRequired,
  lot: PropTypes.shape().isRequired,
};

CardItem.defaultProps = {
  id: null,
};
