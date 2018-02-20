import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableHighlight, Text } from 'react-native';

import styles from './styles';

export default class NavBarCamara extends PureComponent {
  render() {
    return (
      <View style={styles.bar} >
        <TouchableHighlight onPress={() => this.props.navigation.goBack()}>
          <Text style={styles.sideButtons}>Cancelar</Text>
        </TouchableHighlight>
        <TouchableHighlight>
          <Text style={styles.title} >Grabar Video</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => console.log('Seguimo')}>
          <Text style={styles.sideButtons}>Siguiente</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

NavBarCamara.propTypes = {
  navigation: PropTypes.shape(),
};

NavBarCamara.defaultProps = {
  navigation: {},
};
