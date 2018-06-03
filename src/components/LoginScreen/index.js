import React, { PureComponent } from 'react';
import { View, Text, KeyboardAvoidingView, Platform } from 'react-native';
import PropTypes from 'prop-types';
import { NavigationActions } from 'react-navigation';
import { Field, reduxForm } from 'redux-form';

import FormInput from '../FormInput';
import MainButton from '../MainButton';
import Logo from '../Logo';
import LoginFooter from '../LoginFooter';
import styles from './styles';

const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Dirección de email invalida';
  }
  return errors;
};

class LoginScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(values) {
    const { email: email2, password: password2 } = values;
    // TODO: Remove test credentials
    const email = !email2 || email2 === '' ? 'diego_abreu@delagro.com' : email2;
    const password = !password2 || password2 === '' ? 'password' : password2;
    this.props.login({ email, password });
  }

  navigate = () => {
    const navigateToDetails = NavigationActions.navigate({
      routeName: 'Register',
    });
    this.props.navigation.dispatch(navigateToDetails);
  };

  render() {
    const { handleSubmit } = this.props;
    const renderInput = ({ input, label, secureTextEntry, autoFocus, type, meta }) => (
      <FormInput
        label={label}
        input={input}
        autoFocus={autoFocus}
        secureTextEntry={secureTextEntry}
        autoCapitalize={'none'}
        type={type}
        meta={meta}
      />
    );

    return (
      <KeyboardAvoidingView style={styles.container} behaviour='padding' keyboardVerticalOffset={(Platform.OS === 'android') ? -500 : 0}>
        <View style={styles.logoContainer}>
          <Logo />
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.titleText}>Iniciar Sesión</Text>
          <Field
            name='email'
            type='email'
            label={'Usuario:'}
            autoFocus
            component={renderInput}
          />
          <Field
            name='password'
            type='password'
            label={'Contraseña:'}
            secureTextEntry
            component={renderInput}
          />
          <MainButton onPress={handleSubmit(this.onSubmit)} title={'INGRESAR'} style={styles.bigButton} />
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
  handleSubmit: PropTypes.func.isRequired,
  navigation: PropTypes.shape().isRequired,
};

export default reduxForm({
  form: 'LoginForm',
})(LoginScreen);
