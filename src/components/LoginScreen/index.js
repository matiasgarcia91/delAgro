import React, { PureComponent } from 'react';
import { View, Text, TouchableWithoutFeedback, Keyboard, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import { NavigationActions } from 'react-navigation';
import { Field, reduxForm } from 'redux-form';

import FormInput from '../FormInput';
import MainButton from '../MainButton';
import Logo from '../Logo';
import LoginFooter from '../LoginFooter';
import styles from './styles';

class LoginScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(values) {
    const { state } = this.props.navigation;
    const previous = state.params && state.params.previous;
    const { email, password } = values;
    this.props.login({ email, password, previous });
  }

  navigate = () => {
    const navigateToDetails = NavigationActions.navigate({
      routeName: 'Register',
      params: { prev: 'login' },
    });
    this.props.navigation.dispatch(navigateToDetails);
  };

  renderInput = ({ input, label, secureTextEntry, type, meta }) => (
    <FormInput
      label={label}
      input={input}
      secureTextEntry={secureTextEntry}
      autoCapitalize={'none'}
      type={type}
      meta={meta}
    />
  );

  render() {
    const { handleSubmit, pending } = this.props;
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accesible={false}>
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Logo />
          </View>
          <View style={styles.formContainer}>
            <Text style={styles.titleText}>Iniciar Sesión</Text>
            <Field
              name='email'
              type='text'
              label={'Usuario:'}
              component={this.renderInput}
            />
            <Field
              name='password'
              type='password'
              label={'Contraseña:'}
              secureTextEntry
              component={this.renderInput}
            />
            <MainButton onPress={handleSubmit(this.onSubmit)} title={'INGRESAR'} style={styles.bigButton} />
            {pending && (
              <View style={{ marginTop: 30 }}>
                <ActivityIndicator size="large" color="#ff5000" />
              </View>)
            }
          </View>
          <View style={{ flex: 1 }}>
            <LoginFooter text={'¿TODAVIA NO TIENES UNA CUENTA? '} linkText={'REGISTRATE'} link={this.navigate} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

LoginScreen.propTypes = {
  login: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  navigation: PropTypes.shape().isRequired,
  pending: PropTypes.bool.isRequired,
};

export default reduxForm({
  form: 'LoginForm',
})(LoginScreen);
