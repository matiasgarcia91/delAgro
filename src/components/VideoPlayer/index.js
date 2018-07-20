import React, { Component } from 'react';
import Video from 'react-native-video';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';
import { colors } from '../../styles';


export default class VideoPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paused: this.props.paused,
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
    const { uri } = this.props;
    const newURI = `${uri.slice(0, 4)}s${uri.slice(4)}`;

    return (
      <TouchableOpacity style={styles.backgroundVideo} onPress={this.onPress}>
        <ActivityIndicator size="large" style={styles.spinner} color={colors.lightGreen} />
        <Video
          source={{ uri: newURI }}
          resizeMode='cover'
          repeat
          muted
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
  id: PropTypes.number,
  uri: PropTypes.string,
  paused: PropTypes.bool,
  visibleItems: PropTypes.arrayOf(PropTypes.string).isRequired,
};

VideoPlayer.defaultProps = {
  id: null,
  paused: true,
  uri: '',
};
