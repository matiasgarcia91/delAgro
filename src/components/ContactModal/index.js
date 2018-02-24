import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';
import { View, TouchableHighlight, Text } from 'react-native';

import styles from './styles';

export default class ContactModal extends PureComponent {
  render() {
    return (
      <Modal isVisible={this.props.isVisible}>
        <View style={styles.container}>
          <TouchableHighlight style={{ flex: 1 }} onPress={() => console.log('quepinto')}>
            <Text style={styles.sideButtons}>Hola</Text>
          </TouchableHighlight>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={styles.title}>Detalles</Text>
          </View>
          <TouchableHighlight style={{ flex: 1 }} onPress={this.props.toggleModal}>
            <Text style={styles.sideButtons}>Cancel</Text>
          </TouchableHighlight>
        </View>
      </Modal>
    );
  }
}

ContactModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
