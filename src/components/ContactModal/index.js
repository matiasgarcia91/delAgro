import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';
import { View, TouchableHighlight, Text } from 'react-native';
import call from 'react-native-phone-call';
import email from 'react-native-email';

import styles from './styles';

export default class ContactModal extends PureComponent {
  render() {
    return (
      <Modal isVisible={this.props.isVisible}>
        <View style={styles.container}>
          <TouchableHighlight style={{ flex: 1 }} onPress={() => console.log('quepinto')}>
            <Text style={styles.sideButtons}>Llamanos</Text>
          </TouchableHighlight>
         <View style = {styles.lineStyle} />

          <TouchableHighlight  onPress={() => call({number:'+598 99 465 321',prompt:false}).catch(console.error)}>
            <View>
            <Text style={styles.title}>Antonio Lopetegui</Text>
            <Text style={styles.title}>+598 99 465 321</Text>
            </View>
          </TouchableHighlight>

           <View style = {styles.lineStyle} />
           <TouchableHighlight  onPress={() => call({number:'+598 94 597 629',prompt:false}).catch(console.error)}>
           <View>
            <Text style={styles.title}>Javier Moreira</Text>
            <Text style={styles.title}>+598 94 597 629</Text>
           </View>
          </TouchableHighlight>

           <View style = {styles.lineStyle} />
           <TouchableHighlight  onPress={() => call({number:'+598 98 678 987',prompt:false}).catch(console.error)}>
          <View>
            <Text style={styles.title}>Guillermo Paredes</Text>
            <Text style={styles.title}>+598 98 678 987</Text>
          </View>
          </TouchableHighlight>

          <View style = {styles.lineStyle} />

          <TouchableHighlight style={{ flex: 1 }} onPress={() => console.log('quepinto')}>
            <Text style={styles.sideButtons}>o escribinos un mail</Text>
          </TouchableHighlight>
             <View style = {styles.lineStyle} />
          <TouchableHighlight style={{ flex: 1 }} onPress={() => this.handleEmail()}>
          <View>
            <Text style={styles.title}>info@delagro.com.uy</Text>
          </View>
          </TouchableHighlight>
          <TouchableHighlight style={{ flex: 1 }} onPress={this.props.toggleModal}>
            <Text style={styles.sideButtons}>Cerrar</Text>
          </TouchableHighlight>
        </View>
      </Modal>
    );
  }

  handleEmail = () => {
       const to = ['info@delagro.com.uy'] // string or array of email addresses
       email(to, {

       }).catch(console.error)
   }
}

ContactModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

const args = {
  number: '0059899827116', // String value with the number to call
  prompt: false // Optional boolean property. Determines if the user should be prompt prior to the call
}
