import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';
import { View, TouchableHighlight, Text } from 'react-native';
import call from 'react-native-phone-call';
import email from 'react-native-email';

import styles from './styles';

export default class ContactModal extends PureComponent {
  constructor(props) {
    super(props);
    this.renderContacts = this.renderContacts.bind(this);
  }

  handleEmail = () => {
    const to = ['info@delagro.com.uy']; // string or array of email addresses
    email(to, {})
      .catch(console.error);
  };

  renderContacts() {
    return this.props.contacts.map(contact => (
      <TouchableHighlight
        style={{ flex: 1 }}
        onPress={() => call({ number: contact.phone, prompt: false })}
        key={contact.phone}
      >
        <View>
          <Text style={styles.title}>{`${contact.first_name} ${contact.last_name}`}</Text>
          <Text style={styles.title}>{contact.phone}</Text>
        </View>
      </TouchableHighlight>
    ));
  }

  render() {
    const contactList = this.renderContacts();
    return (
      <Modal isVisible={this.props.isVisible}>
        <View style={styles.container}>
          <View style={{ flex: 1 }}>
            <Text style={styles.sideButtons}>Llamanos</Text>
          </View>

          {contactList}

          <View style={{ flex: 1 }}>
            <Text style={styles.sideButtons}>o escribinos un mail</Text>
          </View>

          <TouchableHighlight style={{ flex: 1 }} onPress={() => this.handleEmail()}>
            <Text style={styles.title}>info@delagro.com.uy</Text>
          </TouchableHighlight>

          <TouchableHighlight style={{ flex: 1 }} onPress={this.props.toggleModal}>
            <Text style={styles.sideButtons}>Cerrar</Text>
          </TouchableHighlight>
        </View>
      </Modal>
    );
  }
}

ContactModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
