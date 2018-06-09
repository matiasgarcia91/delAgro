import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, Image, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import muuLogo from '../../assets/images/icons/icon.png';
import styles from './styles';

export default class NavBarHome extends PureComponent {
  render() {
    return (
      <View style={styles.bar} >
        <TouchableHighlight onPress={() => this.props.navigation.navigate('DrawerOpen')}>
          <View style={styles.icon}>
            <Icon name={'bars'} size={30} style={styles.menuIcon} />
          </View>
        </TouchableHighlight>
        <View style={styles.logoContainer}>
          <Image
            source={muuLogo}
            style={styles.logo}
          />
        </View>

        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Filter')}>
            <View style={[styles.icon, { marginRight: 10 }]}>
              <Icon name={'search'} size={30} style={styles.iconn} />
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => this.props.navigation.navigate('welcomeScreen')}>
            <View style={styles.icon}>
              <Icon name={'home'} size={30} style={styles.iconn} />
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

NavBarHome.propTypes = {
  navigation: PropTypes.shape(),
};

NavBarHome.defaultProps = {
  navigation: {},
};
