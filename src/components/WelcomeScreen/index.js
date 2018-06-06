import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { NavigationActions } from 'react-navigation';

import MainButton from '../MainButton';
import Logo from '../Logo';

import styles from './styles';

export default class WelcomeScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.navigatePublish = this.navigatePublish.bind(this);
    this.navigateView = this.navigateView.bind(this);
  }

  navigatePublish = () => {
    const navigateToDetails = NavigationActions.navigate({
      routeName: 'Login',
    });
    this.props.navigation.dispatch(navigateToDetails);
  };

  navigateView = () => {
    const navigateToDetails = NavigationActions.navigate({
      routeName: 'loggedOutFlow',
    });
    this.props.navigation.dispatch(navigateToDetails);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Logo />
        </View>
        <View style={styles.titleContainer} >
          <Text style={styles.titleText} >¡Bienvenido a Muuu!</Text>
          <Text> La aplicación donde podrás publicar lotes de {"\n"} ganado en venta y encontrar el que buscas.</Text>
        </View>
        <View style={styles.formContainer}>
          <MainButton onPress={this.navigateView} title={'VER GANADO EN VENTA'} style={styles.bigButton} />

          <MainButton onPress={this.navigatePublish} title={'PUBLICAR UN LOTE'} style={styles.bigButton} />
        </View>
      </View>
    );
  }
}

WelcomeScreen.propTypes = {
  navigation: PropTypes.shape().isRequired,
};
