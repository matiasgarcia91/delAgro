import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import styles from './styles';
import FormInput from '../FormInput';
import MainButton from '../MainButton';
import validate from './validations';
import DropDown from '../DropDown';
import NavBarBack from '../NavBarBack';

class MyProfile extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      state: null,
    };
    this.onChangeState = this.onChangeState.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillMount() {
    const { initialValues: { state: stateName } } = this.props;
    const state = { id: stateName, name: stateName };
    this.setState({ state });
  }

  onChangeState(value, index, data) {
    const state = data.find(item => item.id === value);
    this.setState({ state });
  }

  onSubmit(values) {
    const { state } = this.state;
    return this.props.updateUserData({ phone: values.phone, state: state.id });
  }

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
    const { state } = this.state;
    const mapStates = states.map(item => ({ id: item, name: item }));
    return (
      <View style={{ flex: 1 }}>
        <NavBarBack navigation={this.props.navigation} title={'Mi Perfil'} />
        <View style={styles.container}>
          <Text style={styles.titleText}>Actualizar Perfil</Text>
          <View style={styles.formContainer}>
            <Field
              name='phone'
              type='text'
              label={'Teléfono móvil:'}
              component={this.renderInput}
            />
            <DropDown label={'Departamento:'} selected={state} values={mapStates} onChange={this.onChangeState} />
            <MainButton onPress={handleSubmit(this.onSubmit)} title={'Actualizar Perfil'} style={styles.bigButton} />
          </View>
        </View>
      </View>
    );
  }
}

MyProfile.propTypes = {
  navigation: PropTypes.shape().isRequired,
  initialValues: PropTypes.shape().isRequired,
  updateUserData: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  states: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default reduxForm({
  form: 'UpdateProfile',
  validate,
})(MyProfile);
