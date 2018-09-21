import React, { Component } from 'react';
import Video from 'react-native-video';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, ActivityIndicator, Image } from 'react-native';
import ElevatedView from 'react-native-elevated-view';
import Icon from 'react-native-vector-icons/FontAwesome';
import vendido from '../../assets/images/vendido.png';

import styles from './styles';
import { colors } from '../../styles';


export default class VideoPlayer extends Component {
  constructor(props) {
    currentTime = 0;
    super(props);
    this.state = {
      paused: this.props.paused,
      active: false,
    };

    this.onPress = this.onPress.bind(this);
  }

  componentWillReceiveProps() {
    const { id, visibleItems } = this.props;
    if (!this.state.paused && !visibleItems.includes(id)) {
      this.setState({ paused: true, active: false });
    }
  }

  onPress() {
    this.setState({ paused: !this.state.paused, active: !this.state.active });
  }

  render() {
    const { paused, active } = this.state;
    const { uri, thumbnail, noThumbnail, status } = this.props;
    return (
      <TouchableOpacity style={{ width: '100%', height: '100%' }} onPress={this.onPress}>
        <ActivityIndicator size="large" style={styles.spinner} color={colors.lightGreen} />
        {active || noThumbnail ?
          <View style={styles.backgroundVideo}>
            <Video
              source={{ uri }}
              resizeMode='cover'
              repeat
              muted
              paused={paused}
              style={{ flex: 1 }}
              onProgress={({ currentTime }) => { this.currentTime = currentTime; }}
            />
          </View> :
          <Image style={styles.backgroundVideo} source={{ uri: thumbnail }} />
        }
        {status && status === 'sold' && <ElevatedView elevation={1} style={{ position: 'absolute', width: '100%', height: '100%', backgroundColor: colors.transparent }}>
          <Image source={vendido} style={{ width: '100%', height: '100%' }} resizeMode='contain' />
        </ElevatedView>}
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
  id: PropTypes.number,
  uri: PropTypes.string.isRequired,
  paused: PropTypes.bool,
  visibleItems: PropTypes.arrayOf(PropTypes.string).isRequired,
  thumbnail: PropTypes.string,
  noThumbnail: PropTypes.bool,
  trimVideo: PropTypes.bool,
};

VideoPlayer.defaultProps = {
  id: null,
  paused: true,
  thumbnail: '',
  noThumbnail: false,
  trimVideo: false,
};
