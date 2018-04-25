import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';
import { View, TouchableHighlight, Text } from 'react-native';
import styles from './styles';

export default class PublishtModal extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal isVisible={this.props.isVisible}>
        <View style={styles.container}>
          <View style={{ flex: 1 }}>
            <Text style={styles.sideButtons}>Su video está siendo procesado.</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.title}>Delagro se comunicará con usted por su teléfono de contacto o vía mail para coordinar visita y aprobación de su lote. Muchas gracias.</Text>
          </View>
          <TouchableHighlight style={{ flex: 1 }} onPress={this.props.toggleModal}>
            <Text style={styles.sideButtons}>Ir al Inicio</Text>
          </TouchableHighlight>
        </View>
      </Modal>
    );
  }
}

PublishModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
