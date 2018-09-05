import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';
import { View, TouchableHighlight, Text, ScrollView } from 'react-native';

import MainButton from '../../MainButton';

import styles from './style';

// Comments:
// El boton ese Cerrar tiene que ser un boton me parece, no solo un texto para mantener la consistencia. hice un mini component button en el filteredScreen,
// mas arriba del componente, capaz que ese puede quedar bien aca.
// Agregaria margenes top y bottom a los titulos para que quede mas tipo parrafo.
// Capaz hacer todo el modal mas grande

export default class AboutModal extends PureComponent {
  render() {
    return (
      <Modal isVisible={this.props.isVisible}>
        <View style={styles.container}>
          <Text />
          <Text style={[styles.sideButtons, { marginBottom: 10 }]}>ACERCA DE MUUU</Text>
          <ScrollView>

            <Text />
            <Text style={{ fontWeight: 'bold' }}>¡Primera y única aplicación en Uruguay para la compra y venta de ganado!</Text>
            <Text />
            <Text><Text style={{ fontWeight: 'bold', color: 'orange' }} >Muuu</Text> es el sistema mas eficiente, rápido y con mas beneficios para la comercialización de su ganado. </Text>
            <Text />
            <Text>Con <Text style={{ fontWeight: 'bold', color: 'orange' }} >Muuu</Text>, <Text style={{ fontWeight: 'bold', color: 'green' }}>DelAgro&Cia</Text> lidera la innovación en la comercialización de ganado y lleva esta excelente herramienta a todos los productores.</Text>
            <Text />
            <Text>¡Llámenos y lo ayudamos a registrarse!</Text>
          </ScrollView>
          <View style={{ marginTop: 20 }}>
            <MainButton onPress={this.props.toggleModal} title={'Cerrar'} />
          </View>
        </View>
      </Modal>
    );
  }
}

AboutModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
