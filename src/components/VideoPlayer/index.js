import React, { PureComponent } from 'react';
import Video from 'react-native-video';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';
import { colors } from '../../styles';


export default class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      paused: true,
      isLoading: false,
    };

    this.onPress = this.onPress.bind(this);
  }

  componentWillReceiveProps() {
    const { id, visibleItems } = this.props;
    if (!this.state.paused && !visibleItems.includes(id)) this.setState({ paused: true });
  }

  onPress() {
    this.setState({ paused: !this.state.paused });
  }

  render() {
    const { paused } = this.state;

    return (
      <TouchableOpacity style={styles.backgroundVideo} onPress={this.onPress}>
        <ActivityIndicator size="large" style={styles.spinner} color={colors.lightGreen} />
        <Video
          source={{ uri: 'https://player.vimeo.com/external/255985812.m3u8?s=68efe184a31448142948def47515696ef3cb4ec6' }}
          resizeMode='cover'
          repeat
          paused={paused}
          style={styles.backgroundVideo}
        />
        <View style={styles.iconContainer}>
          { paused ?
            <Icon name='play' size={22} style={styles.icon} /> :
            <Icon name='pause' size={22} style={styles.icon} />
          }
        </View>
      </TouchableOpacity>
    );
  }
}

VideoPlayer.propTypes = {
  id: PropTypes.string.isRequired,
  visibleItems: PropTypes.arrayOf(PropTypes.string).isRequired,
};
