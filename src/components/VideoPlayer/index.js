import React, { Component } from 'react';
import Video from 'react-native-video';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, ActivityIndicator, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';
import { colors } from '../../styles';


export default class VideoPlayer extends Component {
  constructor(props) {
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
    const { uri, thumbnail } = this.props;
    const newURI = `${uri.slice(0, 4)}s${uri.slice(4)}`;
    return (
      <TouchableOpacity style={styles.backgroundVideo} onPress={this.onPress}>
        <ActivityIndicator size="large" style={styles.spinner} color={colors.lightGreen} />
        {active ?
          <Video
            source={{ uri: newURI }}
            resizeMode='cover'
            repeat
            muted
            paused={paused}
            style={styles.backgroundVideo}
          /> :
          <Image style={styles.backgroundVideo} source={{ uri: thumbnail }} />
        }
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
  uri: PropTypes.string,
  paused: PropTypes.bool,
  visibleItems: PropTypes.arrayOf(PropTypes.string).isRequired,
  thumbnail: PropTypes.string,
};

VideoPlayer.defaultProps = {
  id: null,
  paused: true,
  uri: '',
  thumbnail: '',
};
