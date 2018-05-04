import React, { PureComponent } from 'react';
import { View, Text, ScrollView, KeyboardAvoidingView } from 'react-native';
import PropTypes from 'prop-types';
import { NavigationActions } from 'react-navigation';

import styles from './styles';
import Logo from '../Logo';
import FormInput from '../FormInput';
import MainButton from '../MainButton';
import LoginFooter from '../LoginFooter';

export default class RegisterScreen extends PureComponent {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      cellphone: '',
      state: '',
      dob: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeLName = this.onChangeLName.bind(this);
    this.onChangeCellphone = this.onChangeCellphone.bind(this);
    this.onChangeState = this.onChangeState.bind(this);
    this.onChangeDOB = this.onChangeDOB.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeName(firstName) {
    this.setState({ firstName });
  }

  onChangeLName(lastName) {
    this.setState({ lastName });
  }

  onChangeCellphone(cellphone) {
    this.setState({ cellphone });
  }

  onChangeState(state) {
    this.setState({ state });
  }

  onChangeDOB(dob) {
    this.setState({ dob });
  }

  onChangeEmail(email) {
    this.setState({ email });
  }

  onChangePassword(password) {
    this.setState({ password });
  }

  onChangeConfirmPassword(confirmPassword) {
    this.setState({ confirmPassword });
  }

  onSubmit() {
    const {
      firstName,
      lastName,
      cellphone,
      state,
      dob,
      email,
      password,
      confirmPassword,
    } = this.state;
    if (password !== confirmPassword) {
      // TODO: hacer algo cuando los password son distintos.
      return null;
    }
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
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <ScrollView>
          <View style={styles.logoContainer}>
            <Logo />
          </View>
          <Text style={styles.titleText}>Registrarse</Text>
          <View style={styles.formContainer}>
            <FormInput label={'Nombre:'} onChangeText={this.onChangeName} />
            <FormInput label={'Apellido:'} onChangeText={this.onChangeLName} />
            <FormInput label={'Teléfono móvil:'} onChangeText={this.onChangeCellphone} />
            <FormInput label={'Departamento:'} onChangeText={this.onChangeState} />
            <FormInput label={'Fecha de nacimiento:'} onChangeText={this.onChangeDOB} />
            <FormInput label={'Correo electrónico:'} onChangeText={this.onChangeEmail} />
            <FormInput label={'Contraseña:'} onChangeText={this.onChangePassword} />
            <FormInput label={'Repetir contraseña:'} onChangeText={this.onChangeConfirmPassword} />
            <MainButton onPress={this.onSubmit} title={'Registrarse'} style={styles.bigButton} />
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
};
