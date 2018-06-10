import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';
import { View, TouchableHighlight, Text } from 'react-native';


import styles from './styles';

export default class RegisterModal extends PureComponent {
  render() {
    return (
      <Modal isVisible={this.props.isVisible}>
        <View style={styles.container}>
          <View style={{ flex: 1 }}>
            <Text style={styles.sideButtons}>Te has registrado a Muuu exitosamente!</Text>
          </View>
          <TouchableHighlight style={{ flex: 1 }} onPress={this.props.toggleModal}>
            <Text style={styles.sideButtons}>Cerrar</Text>
          </TouchableHighlight>
        </View>
      </Modal>
    );
  }
}

RegisterModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
