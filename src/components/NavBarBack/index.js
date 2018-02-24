import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableHighlight, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

export default class NavBarBack extends PureComponent {
  render() {
    return (
      <View style={styles.bar} >
        <TouchableHighlight onPress={() => this.props.navigation.goBack()}>
          <Text style={styles.sideButtons}>
            <Icon name={'chevron-left'} size={30} />
          </Text>
        </TouchableHighlight>
        <TouchableHighlight>
          <Text style={styles.title}>Detalles</Text>
        </TouchableHighlight>
        <View />
      </View>
    );
  }
}

NavBarBack.propTypes = {
  navigation: PropTypes.shape(),
};

NavBarBack.defaultProps = {
  navigation: {},
};
