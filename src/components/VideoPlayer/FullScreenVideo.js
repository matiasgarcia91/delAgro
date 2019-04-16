import React, { Component } from 'react';
import Orientation from 'react-native-orientation';
import { View, StatusBar, Text, BackHandler, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = {
  fullScreen: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    height: '100%',
    width: '100%',
    backgroundColor: 'black',
    zIndex: 100,
  },
  icon: {
    color: 'white',
  },
  iconContainer: {
    position: 'absolute',
    right: 10,
    bottom: 10,
  },
  iconFullScreen: {
    position: 'absolute',
    color: 'white',
    zIndex: 20,
    bottom: 10,
    left: 10,
  },
};

export default class FullScreenVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      verticalScreen: true,
      paused: false,
    };
  }

  componentDidMount() {
    this.onverticalScreen();
    BackHandler.addEventListener('hardwareBackPress', this._handleBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this._handleBackPress);
  }


  onverticalScreen = () => {
    const { verticalScreen } = this.state;
    if (verticalScreen) {
      StatusBar.setHidden(true);
      Orientation.lockToLandscapeLeft();
    } else {
      const { navigation } = this.props;
      navigation.setParams({ videofs: false });
      StatusBar.setHidden(false);
      Orientation.lockToPortrait();

    }
    this.setState({ verticalScreen: !verticalScreen });
  };

  _handleBackPress = () => {
    const { verticalScreen } = this.state;
    const { navigation } = this.props;
    if (!verticalScreen) this.onverticalScreen();
    else navigation.goBack();
    return true;
  };

  pause = () => {
    this.setState((prevState) => {
      const { paused } = prevState;
      return { paused: !paused };
    });
  }

  render() {
    const { uri } = this.props;
    const { paused } = this.state;
    return (
      <View style={styles.fullScreen}>
        <TouchableOpacity style={{ width: '100%', height: '100%' }} onPress={this.pause}>
          <Video
            source={{ uri }}
            resizeMode='cover'
            repeat
            muted
            paused={paused}
            style={{ flex: 1 }}
          />
          <View style={styles.iconContainer}>
            { paused ?
              <Icon name='play' size={28} style={styles.icon} /> :
              <Icon name='pause' size={28} style={styles.icon} />
            }
          </View>
          <Icon name='compress' size={28} style={styles.iconFullScreen} onPress={this.onverticalScreen} />
        </TouchableOpacity>
      </View>
    );
  }
}

