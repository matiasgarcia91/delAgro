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
      email: '',
      password: '',
    };
    this.onEmailChanged = this.onEmailChanged.bind(this);
    this.onPasswordChanged = this.onPasswordChanged.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onEmailChanged(email) {
    this.setState({ email });
  }

  onPasswordChanged(password) {
    this.setState({ password });
  }

  onSubmit() {
    const { email: email2, password: password2 } = this.state;
    // TODO: Remove test credentials
    const email = email2 === '' ? 'diego_abreu@delagro.com' : email2;
    const password = password2 === '' ? 'password' : password2;
    this.props.login({ email, password });
  }

  navigate = () => {
    const navigateToDetails = NavigationActions.navigate({
      routeName: 'Register',
    });
    this.props.navigation.dispatch(navigateToDetails);
  };

  render() {
    const { email, password } = this.state;
    return (
      <KeyboardAvoidingView style={styles.container} behaviour='padding'keyboardVerticalOffset={(Platform.OS === 'android') ? -500 : 0}>
        <View style={styles.logoContainer}>
          <Logo />
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.titleText}>Iniciar Sesión</Text>
          <FormInput
            label={'Usuario:'}
            editable={false}
            value={email}
            autoFocus
            onChangeText={this.onEmailChanged}
            autoCapitalize={'none'}
          />
          <FormInput
            label={'Contraseña:'}
            editable={false}
            placeholder={password}
            secureTextEntry={true}
            value={password}
            onChangeText={this.onPasswordChanged}
            autoCapitalize={'none'}
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
