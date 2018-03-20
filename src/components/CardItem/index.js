import React, { PureComponent } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import VideoPlayer from '../../containers/VideoPlayerContainer';
import CardFooter from '../../containers/CardFooterContainer';
import DetailsCardFooter from '../../containers/DetailsCardFooterContainer';

import styles from './styles';

export default class CardItem extends PureComponent {
  render() {
    const { lot, details, category } = this.props;
    const uri = 'https://player.vimeo.com/external/255985812.m3u8?s=68efe184a31448142948def47515696ef3cb4ec6';
    return (
      <View style={styles.container}>
        <View style={styles.videoContainer}>
          <VideoPlayer id={this.props.lot.id} uri={uri} />
        </View>
        <View style={styles.footer}>
          { details ?
            <DetailsCardFooter lot={lot} category={category} /> :
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
  category: PropTypes.string,
};

CardItem.defaultProps = {
  id: null,
  navigation: {},
  details: false,
  category: '',
};
