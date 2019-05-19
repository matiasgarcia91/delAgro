import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';
import { View, TouchableOpacity, Text, ScrollView } from 'react-native';
import call from 'react-native-phone-call';
import email from 'react-native-email';
import MainButton from '../../MainButton';

import styles from './styles';

// Clients are adding location information on the same field as last_name. This helper
// function splits that info for better presentation. Will be useless if clients
// change the format in which they add this info.
function splitLastName(lname) {
  const nameAndZone = lname.split('(');
  const zone = nameAndZone[1] && `(${nameAndZone[1]}`;
  return { lname: nameAndZone[0], zone };
}

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
    const { contacts } = this.props;
    const sortedContacts = contacts.sort((a, b) => b.last_name.length - a.last_name.length);
    return sortedContacts.map((contact) => {
      const { lname, zone } = splitLastName(contact.last_name); // Temporary necessary
      return (
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => call({ number: contact.phone, prompt: false })}
          key={contact.phone}
        >
          <View style={styles.contactItem}>
            <Text>{`${contact.first_name} ${lname}`}</Text>
            {zone && <Text style={{ textAlign: 'center' }}>{zone}</Text>}
            <Text style={styles.phone}>{contact.phone}</Text>
          </View>
        </TouchableOpacity>
      );
    });
  }

  render() {
    const contactList = this.renderContacts();
    return (
      <Modal isVisible={this.props.isVisible}>
        <View style={styles.container}>
          <View style={{ flex: 0.2, marginBottom: 5 }}>
            <Text style={styles.greenText}>Llamanos</Text>
          </View>

          <View style={{ flex: 3 }}>
            <ScrollView style={{ flex: 1 }}>
              {contactList}
            </ScrollView>
          </View>

          <TouchableOpacity style={{ flex: 0.7 }} onPress={() => this.handleEmail()}>
            <Text style={styles.greenText}>o escribinos un mail</Text>
            <Text style={styles.mail}>info@delagro.com.uy</Text>
          </TouchableOpacity>

          <View style={{ marginTop: 8 }}>
            <MainButton onPress={this.props.toggleModal} title={'Cerrar'} />
          </View>
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
