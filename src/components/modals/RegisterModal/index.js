import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';
import { View, TouchableHighlight, Text ,Image} from 'react-native';
import logo from '../../../assets/images/logo_muuu.png';
import MainButton from '../../MainButton';

import styles from './styles';

export default class RegisterModal extends PureComponent {
  render() {
    return (
      <Modal isVisible={this.props.isVisible}>
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Image source={logo} style={styles.logo} />
          </View>
          <View style={{ flex: 1, marginTop: 30 }}>
            <Text style={styles.sideButtons}>¡Te has registrado exitosamente!</Text>
          </View>
          <View style={{ marginTop: 20 }}>
            <MainButton onPress={this.props.toggleModal} title={'Cerrar'} />
          </View>
        </View>
      </Modal>
    );
  }
}

RegisterModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
