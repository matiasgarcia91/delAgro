import React, { PureComponent } from 'react';
import { View, Text, KeyboardAvoidingView, Platform } from 'react-native';
import PropTypes from 'prop-types';
import { NavigationActions } from 'react-navigation';

import FormInput from '../FormInput';
import MainButton from '../MainButton';
import Logo from '../Logo';
import LoginFooter from '../LoginFooter';
import styles from './styles';

export default class LoginScreen extends PureComponent {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
    this.onUsernameChanged = this.onUsernameChanged.bind(this);
    this.onPasswordChanged = this.onPasswordChanged.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onUsernameChanged(username) {
    this.setState({ username });
  }

  onPasswordChanged(password) {
    this.setState({ password });
  }

  onSubmit() {
    this.props.login();
  }

  navigate = () => {
    const navigateToDetails = NavigationActions.navigate({
      routeName: 'Register',
    });
    this.props.navigation.dispatch(navigateToDetails);
  };

  render() {
    const { username, password } = this.state;
    return (
      <KeyboardAvoidingView style={styles.container} behaviour='padding' keyboardVerticalOffset={(Platform.OS === 'android') ? -500 : 0}>
        <View style={styles.logoContainer}>
          <Logo />
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.titleText}>Iniciar Sesión</Text>
          <FormInput
            label={'Usuario:'}
            value={username}
            autoFocus
            onChangeText={this.onUsernameChanged}
          />
          <FormInput
            label={'Contraseña:'}
            placeholder={password}
            value={password}
            onChangeText={this.onPasswordChanged}
          />
          <MainButton onPress={this.onSubmit} title={'INGRESAR'} style={styles.bigButton} />
        </View>
        <View style={{ flex: 1 }}>
          <LoginFooter text={'¿TODAVIA NO TIENES UNA CUENTA? '} linkText={'REGISTRATE'} link={this.navigate} />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

LoginScreen.propTypes = {
  login: PropTypes.func.isRequired,
  navigation: PropTypes.shape().isRequired,
};
