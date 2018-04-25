import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, Image, TouchableHighlight, Text } from 'react-native';
import menuIcon from '../../assets/images/icons/menu-icon.png';
import uploadIcon from '../../assets/images/icons/upload-icon.png';
import filterIcon from '../../assets/images/icons/filter_icon.png';
import delAgroLogo from '../../assets/images/icons/icon.png';
import Icon from 'react-native-vector-icons/FontAwesome';
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
        <View style={styles.logoContainer}>
          <Image
            source={delAgroLogo}
            style={styles.logo}
          />
        </View>
        {isLoggedIn ?
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Filter')}>

            <Image
              source={filterIcon}
              style={styles.filter}
            />

          </TouchableHighlight> :
          <View style={styles.ghost} />
        }

        {isLoggedIn ?
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Camera')}>

            <Image
              source={uploadIcon}
              style={styles.upload}
            />

          </TouchableHighlight> :
          <View style={styles.ghost} />
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
