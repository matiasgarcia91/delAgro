import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Text, Alert } from 'react-native';
import { NavigationActions } from 'react-navigation';

import styles from './styles';

export default class NavBarPublish extends PureComponent {

  navigateBack = () => {
    const navigateHome = NavigationActions.navigate({
      routeName: 'HomeIn',
    });
    this.props.navigation.dispatch(navigateHome);
  }

  onPressCancel = () => {
    Alert.alert(
      '',
      '¿Está seguro que desea salir?',
      [
        { text: 'Aceptar', onPress: this.navigateBack },
        { text: 'Cancelar', onPress: () => null, style: 'cancel' },
      ],
      { cancelable: true }
    );
  }

  render() {
    const { submitLot, handleSubmit } = this.props;
    return (
      <View style={styles.bar} >
        <TouchableOpacity onPress={this.onPressCancel}>
          <Text style={styles.sideButtons}>Cancelar</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.title}>Completar datos</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSubmit(submitLot)}>
          <Text style={styles.sideButtons}>Subir</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

NavBarPublish.propTypes = {
  navigation: PropTypes.shape(),
  submitLot: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

NavBarPublish.defaultProps = {
  navigation: {},
};
