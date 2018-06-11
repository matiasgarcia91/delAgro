import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableHighlight, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

export default class NavBarBack extends PureComponent {
  render() {
    const { title } = this.props;
    return (
      <View style={styles.bar} >
        <TouchableHighlight style={{ flex: 1 }} onPress={() => this.props.navigation.goBack()}>
          <View style={styles.icon}>
            <Icon name={'chevron-left'} size={30} style={styles.backButton} />
          </View>
        </TouchableHighlight>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={{ flex: 1 }} />
      </View>
    );
  }
}

NavBarBack.propTypes = {
  navigation: PropTypes.shape(),
  title: PropTypes.string.isRequired,
};

NavBarBack.defaultProps = {
  navigation: {},
};
