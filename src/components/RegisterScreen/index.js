import React, { Component } from 'react';
import { View, Text, ScrollView, KeyboardAvoidingView } from 'react-native';
import PropTypes from 'prop-types';
import { NavigationActions } from 'react-navigation';
import { Field, reduxForm } from 'redux-form';
import CheckBox from 'react-native-check-box';

import styles from './styles';
import Logo from '../Logo';
import FormInput from '../FormInput';
import MainButton from '../MainButton';
import LoginFooter from '../LoginFooter';
import validate from './validations';
import DropDown from '../DropDown';
import { showTermsModal } from '../../reducers/modals';

class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      state: null,
      checkbox: false,
    };
    this.onChangeState = this.onChangeState.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeCheckbox = this.onChangeCheckbox.bind(this);
  }

  onChangeState(value, index, data) {
    const state = data.find(item => item.id === value);
    this.setState({ state });
  }

  onChangeCheckbox() {
    const { checkbox } = this.state;
    this.setState({ checkbox: !checkbox });
  }

  onSubmit(values) {
    const {
      firstName,
      lastName,
      cellphone,
      email,
      password,
    } = values;
    const { state, checkbox } = this.state;
    if (!checkbox) return null;
    const user = {
      firstName,
      lastName,
      cellphone,
      state: state.id,
      email,
      password,
    };

    return this.props.registerUser(user);
  }

  navigate = () => {
    const navigateToDetails = NavigationActions.navigate({
      routeName: 'Login',
    });
    this.props.navigation.dispatch(navigateToDetails);
  };

  renderInput = ({ input, label, secureTextEntry, autoFocus, type, meta, capitalize }) => (
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

  render() {
    const { handleSubmit, states } = this.props;
    const { state, checkbox } = this.state;
    const mapStates = states.map(item => ({ id: item, name: item }));
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
              component={this.renderInput}
            />
            <Field
              name='lastName'
              type='text'
              label={'Apellido:'}
              capitalize={'words'}
              component={this.renderInput}
            />
            <Field
              name='cellphone'
              type='text'
              label={'Teléfono móvil:'}
              component={this.renderInput}
            />
            <DropDown label={'Departamento:'} selected={state} values={mapStates} onChange={this.onChangeState} />
            <Field
              name='email'
              type='email'
              label={'Correo electrónico:'}
              capitalize={'none'}
              component={this.renderInput}
            />
            <Field
              name='password'
              type='password'
              secureTextEntry
              label={'Contraseña:'}
              capitalize={'none'}
              component={this.renderInput}
            />
            <Field
              name='confirmPassword'
              type='password'
              secureTextEntry
              label={'Repetir contraseña:'}
              capitalize={'none'}
              component={this.renderInput}
            />
            <View style={{ alignItems: 'center', marginBottom: 15 }}>
              <Text onPress={showTermsModal} style={{ color: '#0000EE', fontSize: 18 }}>Terminos y condiciones</Text>
            </View>
            <View style={{ flex: 1, justifyContent: 'center' }}>
              <CheckBox
                style={{ flex: 1, padding: 10, paddingLeft: 20, marginBottom: 10 }}
                onClick={this.onChangeCheckbox}
                isChecked={checkbox}
                rightText={'He leido y acepto los terminos y condiciones.'}
              />
            </View>
            <MainButton onPress={handleSubmit(this.onSubmit)} title={'Registrarse'} style={styles.bigButton} disabled={!checkbox} />
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
