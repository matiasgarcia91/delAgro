import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';
import { View, TouchableHighlight, Text } from 'react-native';


import styles from './styles';

export default class UploadModal extends PureComponent {
  render() {
    return (
      <Modal isVisible={this.props.isVisible}>
        <View style={styles.container}>
          <View style={{ flex: 1 }}>
            <Text style={styles.sideButtons}>
              Tu lote se esta subiendo...(/n) Quedará visible cuando sea aprobado por Del Agro. (/n) Muchas Gracias!
            </Text>
          </View>
          <TouchableHighlight style={{ flex: 1 }} onPress={this.props.toggleModal}>
            <Text style={styles.sideButtons}>Cerrar</Text>
          </TouchableHighlight>
        </View>
      </Modal>
    );
  }
}

UploadModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
