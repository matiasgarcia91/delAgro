import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableHighlight, Text } from 'react-native';
import { NavigationActions } from 'react-navigation';

import styles from './styles';

export default class NavBarPublish extends PureComponent {
  navigate = () => {
    const navigateToDetails = NavigationActions.navigate({
      routeName: 'Home',
    });
    this.props.navigation.dispatch(navigateToDetails);
  };

  render() {
    return (
      <View style={styles.bar} >
        <TouchableHighlight onPress={this.navigate}>
          <Text style={styles.sideButtons}>Cancelar</Text>
        </TouchableHighlight>
        <TouchableHighlight>
          <Text style={styles.title} >Completar datos</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => console.log('Tuya coco')}>
          <Text style={styles.sideButtons}>Subir</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

NavBarPublish.propTypes = {
  navigation: PropTypes.shape(),
};

NavBarPublish.defaultProps = {
  navigation: {},
};
