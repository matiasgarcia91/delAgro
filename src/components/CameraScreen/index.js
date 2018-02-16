import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

//import Camera from 'react-native-camera';
import MainButton from '../MainButton';
import styles from './styles';

export default class CameraScreen extends PureComponent {
  constructor() {
    super();
    this.takePicture = this.takePicture.bind(this);
  }
  takePicture() {
    const options = {};
    // options.location = ...
    this.camera.capture({ metadata: options })
      .then(data => console.log(data))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <View style={styles.container}>
        <MainButton onPress={() => this.props.navigation.goBack()} title={'back'} />
        <Text style={styles.capture} onPress={this.takePicture}>[CAPTURE]</Text>
      </View>
    );
  }
}

CameraScreen.propTypes = {
  navigation: PropTypes.shape().isRequired,
};
