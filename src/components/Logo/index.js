import React from 'react';
import { Image } from 'react-native';

import logo from '../../assets/images/logo_muuu.png';
import styles from './styles';

function Logo() {
  return <Image source={logo} style={styles.logo} />;
}

export default Logo;
