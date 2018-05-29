import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import MainButton from '../MainButton';
import Logo from '../Logo';

import styles from './styles';

export default class WelcomeScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.onViewPress = this.onViewPress.bind(this);
  }
  onViewPress() {
    console.log('view photos');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Logo />
        </View>
        <View style={styles.formContainer}>
          <MainButton onPress={this.onViewPress} title={'Ver Fotos'} style={styles.bigButton} />
        </View>
      </View>
    );
  }
}

WelcomeScreen.propTypes = {
};
