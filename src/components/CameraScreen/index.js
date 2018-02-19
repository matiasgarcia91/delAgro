import React, { PureComponent } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';

import { RNCamera } from 'react-native-camera';
import NavBarCamara from '../NavBarCamara';

import styles from './styles';

export default class CameraScreen extends PureComponent {
  constructor() {
    super();
    this.state = {
      recording: false,
    };
    this.record = this.record.bind(this);
  }

  async record() {
    if (this.camera) {
      if (this.state.recording) {
        this.camera.stopRecording();
        this.setState({ recording: false });
      } else {
        this.setState({ recording: true });
        const options = { quality: RNCamera.Constants.VideoQuality['720p'], maxDuration: 180 };
        const data = await this.camera.recordAsync(options);
        console.log(data.uri);
      }
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <NavBarCamara navigation={this.props.navigation} />
        <RNCamera
          ref={(ref) => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          permissionDialogTitle={'Permission to use camera'}
          permissionDialogMessage={'We need your permission to use your camera phone'}
        />
        <View style={styles.footer}>
          <View style={styles.buttonContainers}>
            <TouchableOpacity style={styles.galleryButton} onPress={() => console.log('To gallery')}>
              <Icon name='image' size={40} color={'#a5a49a'} />
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainers}>
            <TouchableOpacity style={styles.captureButton} onPress={this.record}>
              <Icon name='circle' size={25} />
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainers} />
        </View>
      </View>
    );
  }
}

CameraScreen.propTypes = {
  navigation: PropTypes.shape().isRequired,
};
