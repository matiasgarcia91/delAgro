import React, { PureComponent } from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import { NavigationActions } from 'react-navigation';

import MainButton from '../MainButton';
import logo from '../../assets/images/logo.png';
import cows from '../../assets/images/cows.png';
import LogoDelAgro from '../../assets/images/delagroicon.png';

import styles from './styles';

export default class WelcomeScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.navigatePublish = this.navigatePublish.bind(this);
    this.navigateView = this.navigateView.bind(this);
  }

  componentDidMount() {
    this.props.getStaticData();
  }

  navigatePublish = () => {
    const { navigation, loggedIn } = this.props;
    const routeName = loggedIn ? 'Camera' : 'Login';
    const navigateToDetails = NavigationActions.navigate({ routeName, params: { previous: 'welcome' } });
    navigation.dispatch(navigateToDetails);
  };

  navigateView = () => {
    const { navigation, loggedIn } = this.props;
    const routeName = loggedIn ? 'loggedInFlow' : 'loggedOutFlow';
    const navigateToDetails = NavigationActions.navigate({ routeName });
    navigation.dispatch(navigateToDetails);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.text}>Para comercializar tu ganado usá:</Text>
        </View>
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo} />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.text}>¡Cuanto más la usás, menos pagás!</Text>
        </View>
        <View style={styles.formContainer}>
          <MainButton onPress={() => null} title={'ACERCA DE MUUU'} style={styles.bigButton} textStyle={styles.bigButtonText} />
          <MainButton onPress={this.navigateView} title={'VER GANADO EN VENTA'} style={styles.bigButton} textStyle={styles.bigButtonText} />
          <MainButton onPress={this.navigatePublish} title={'PUBLICAR UN LOTE'} style={styles.bigButton} textStyle={styles.bigButtonText} />
        </View>
        <View style={styles.logoCowsContainer}>
          <Image style={styles.logoCows} source={cows} />
        </View> 
        <View style={styles.logoBottomContainer}>
          <Image style={styles.logoBottom} source={LogoDelAgro} />
        </View>
      </View>
    );
  }
}

WelcomeScreen.propTypes = {
  navigation: PropTypes.shape().isRequired,
  loggedIn: PropTypes.bool.isRequired,
  getStaticData: PropTypes.func.isRequired,
};
