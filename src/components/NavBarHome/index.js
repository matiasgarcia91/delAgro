import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, Image, TouchableHighlight } from 'react-native';

import menuIcon from '../../assets/images/icons/menu-icon.png';
import uploadIcon from '../../assets/images/icons/upload-icon.png';
import delAgroLogo from '../../assets/images/icons/delagroLogo.png';
import styles from './styles';

export default class NavBarHome extends PureComponent {
  render() {
    const { isLoggedIn } = this.props;
    return (
      <View style={styles.bar} >
        <TouchableHighlight onPress={() => this.props.navigation.navigate('DrawerOpen')}>
          <Image
            source={menuIcon}
            style={styles.icon}
          />
        </TouchableHighlight>
        <TouchableHighlight>
          <Image
            source={delAgroLogo}
            style={styles.icon}
          />
        </TouchableHighlight>
        {isLoggedIn ?
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Camera')}>
            <Image
              source={uploadIcon}
              style={styles.icon}
            />
          </TouchableHighlight> :
          <View style={styles.icon} />
        }
      </View>
    );
  }
}

NavBarHome.propTypes = {
  navigation: PropTypes.shape(),
  isLoggedIn: PropTypes.bool.isRequired,
};

NavBarHome.defaultProps = {
  navigation: {},
};
