import React, { Component } from 'react';
import { View, Text, ScrollView, KeyboardAvoidingView } from 'react-native';
import PropTypes from 'prop-types';
import { NavigationActions } from 'react-navigation';
import { Field, reduxForm } from 'redux-form';

import styles from './styles';
import Logo from '../Logo';
import FormInput from '../FormInput';
import MainButton from '../MainButton';
import LoginFooter from '../LoginFooter';
import validate from './validations';
import DropDown from '../DropDown';

class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      state: null,
    };
    this.onChangeState = this.onChangeState.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeState(value, index, data) {
    const state = data.find(item => item.id === value);
    this.setState({ state });
  }

  onSubmit(values) {
    const {
      firstName,
      lastName,
      cellphone,
      dob,
      email,
      password,
      confirmPassword,
    } = values;
    const { state } = this.state;

    const user = {
      firstName,
      lastName,
      cellphone,
      state,
      dob,
      email,
      password,
      confirmPassword,
    };

    const fakeRegister = {
      firstName: 'pruebaApp',
      lastName: 'pruebaApp',
      email: 'aadd.com',
      password: '123456',
    };
    // TODO: switch to user and delete fakeRegister
    return this.props.registerUser(fakeRegister);
  }

  navigate = () => {
    const navigateToDetails = NavigationActions.navigate({
      routeName: 'Login',
    });
    this.props.navigation.dispatch(navigateToDetails);
  };

  render() {
    const { handleSubmit, states } = this.props;
    const { state } = this.state;
    const mapStates = states.map(item => ({ id: item, name: item }));
    const renderInput = ({ input, label, secureTextEntry, autoFocus, type, meta, capitalize }) => (
      <FormInput
        label={label}
        input={input}
        autoFocus={autoFocus}
        secureTextEntry={secureTextEntry}
        autoCapitalize={capitalize}
        type={type}
        meta={meta}
      />
    );

    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <ScrollView>
          <View style={styles.logoContainer}>
            <Logo />
          </View>
          <Text style={styles.titleText}>Registrarse</Text>
          <View style={styles.formContainer}>
            <Field
              name='firstName'
              type='text'
              label={'Nombre:'}
              capitalize={'words'}
              component={renderInput}
            />
            <Field
              name='lastName'
              type='text'
              label={'Apellido:'}
              capitalize={'words'}
              component={renderInput}
            />
            <Field
              name='cellphone'
              type='text'
              label={'Teléfono móvil:'}
              component={renderInput}
            />
            <DropDown label={'Departamento:'} selected={state} values={mapStates} onChange={this.onChangeState} />
            <Field
              name='dob'
              type='text'
              label={'Fecha de nacimiento:'}
              component={renderInput}
            />
            <Field
              name='email'
              type='email'
              label={'Correo electrónico:'}
              capitalize={'none'}
              component={renderInput}
            />
            <Field
              name='password'
              type='password'
              secureTextEntry
              label={'Contraseña:'}
              capitalize={'none'}
              component={renderInput}
            />
            <Field
              name='confirmPassword'
              type='password'
              secureTextEntry
              label={'Repetir contraseña:'}
              capitalize={'none'}
              component={renderInput}
            />
            <MainButton onPress={handleSubmit(this.onSubmit)} title={'Registrarse'} style={styles.bigButton} />
          </View>
          <View style={{ flex: 1 }}>
            <LoginFooter text={'TIENES UNA CUENTA? '} linkText={'INICIAR SESION'} link={this.navigate} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

RegisterScreen.propTypes = {
  navigation: PropTypes.shape().isRequired,
  registerUser: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  states: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default reduxForm({
  form: 'Register',
  validate,
})(RegisterScreen);
