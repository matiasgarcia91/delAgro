import React, { PureComponent } from 'react';
import { View, TouchableOpacity, Text, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import ImagePicker from 'react-native-image-picker';
import * as Progress from 'react-native-progress';

import { RNCamera } from 'react-native-camera';
import NavBarCamara from '../NavBarCamara';
import parseTime from '../../helpers/parseTime';
import VideoPlayer from '../../containers/VideoPlayerContainer';

import styles from './styles';

export default class CameraScreen extends PureComponent {
  static navigationOptions = {
    drawerLabel: null,
  }

  constructor() {
    super();
    this.state = {
      recording: false,
      elapsed: null,
      video: null,
    };
    this.record = this.record.bind(this);
    this.tick = this.tick.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.stopRecording = this.stopRecording.bind(this);
    this.selectVideoTapped = this.selectVideoTapped.bind(this);
  }

  startTimer() {
    this.timer = setInterval(this.tick, 1000);
    this.setState({ elapsed: 0 });
  }

  stopRecording() {
    this.camera.stopRecording();
    clearInterval(this.timer);
    this.setState({ recording: false, elapsed: null });
  }

  tick() {
    const { elapsed: last } = this.state;
    if (last + 1 === 180) return this.stopRecording();
    return this.setState({ elapsed: last + 1 });
  }

  async record() {
    if (this.camera) {
      if (this.state.recording) {
        this.stopRecording();
      } else {
        this.startTimer();
        this.setState({ recording: true, video: null });
        const options = { quality: RNCamera.Constants.VideoQuality['720p'], maxDuration: 180 };
        const data = await this.camera.recordAsync(options);
        this.setState({ video: data.uri });
        console.log(data.uri);
      }
    } else {
      this.setState({ video: null });
    }
  }

  selectVideoTapped() {
    const options = {
      mediaType: 'video',
      durationLimit: 180,
    };

    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled video picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        this.setState({ video: response.uri });
      }
    });
  }

  render() {
    const { elapsed, video } = this.state;
    const timer = elapsed ? parseTime(elapsed) : null;
    const progress = elapsed / 180;
    return (
      <View style={styles.container}>
        <NavBarCamara navigation={this.props.navigation} video={video} />
        { video ?
          (<View style={styles.preview}><VideoPlayer uri={video} paused={false} /></View>) :
          (<RNCamera
            ref={(ref) => {
              this.camera = ref;
            }}
            style={styles.preview}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.on}
            permissionDialogTitle={'Permission to use camera'}
            permissionDialogMessage={'We need your permission to use your camera phone'}
          />)
        }
        {!video && (
          <Progress.Bar
            progress={progress}
            width={Dimensions.get('window').width}
            height={30}
            borderRadius={0}
            animated
            useNativeDriver
            animationType={'timing'}
            color={'#95c684'}
            unfilledColor={'#4a4a4a'}
            borderWidth={0}
          />
        )}
        <View style={styles.footer}>
          <View style={styles.buttonContainers}>
            <TouchableOpacity style={styles.galleryButton} onPress={this.selectVideoTapped}>
              <Icon name='image' size={40} color={'#a5a49a'} />
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainers}>
            <TouchableOpacity style={styles.captureButton} onPress={this.record}>
              <Icon name='circle' size={25} />
            </TouchableOpacity>
          </View>
          <View style={styles.timerContainer}>
            {!!elapsed && (
              <View style={{ flexDirection: 'row' }}>
                <View style={styles.rec} />
                <Text style={{ fontSize: 19 }}>{timer}</Text>
              </View>
            )}
          </View>
        </View>
      </View>
    );
  }
}

CameraScreen.propTypes = {
  navigation: PropTypes.shape().isRequired,
};
