import React, { PureComponent } from 'react';
import { View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import NavBarPublish from '../NavBarPublish';
import styles from './styles';
import FormInput from '../FormInput';
import DropDown from '../DropDown';
import { RAZAS, CATEGORIAS, DEPARTAMENTOS } from '../../constants';

export default class PublishScreen extends PureComponent {
  constructor() {
    super();
    this.state = {
      categoryId: null,
      breedId: null,
      stateId: null,
      cellphone: '',
      state: '',
      dob: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
    this.onChangeBreed = this.onChangeBreed.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onChangeCellphone = this.onChangeCellphone.bind(this);
    this.onChangeState = this.onChangeState.bind(this);
    this.onChangeDOB = this.onChangeDOB.bind(this);
    this.onChangeWeight = this.onChangeWeight.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this);
  }

  onChangeBreed(index) {
    this.setState({ breedId: index });
  }

  onChangeCategory(categoryId) {
    this.setState({ categoryId });
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

  onChangeWeight(weight) {
    this.setState({ weight });
  }

  onChangePassword(password) {
    this.setState({ password });
  }

  onChangeConfirmPassword(confirmPassword) {
    this.setState({ confirmPassword });
  }

  render() {
    const { breedId, categoryId, stateId } = this.state;
    return (
      <View style={styles.container}>
        <NavBarPublish navigation={this.props.navigation} />
        <ScrollView>
          <View style={styles.formContainer}>
            <DropDown label={'Categoria:'} selected={categoryId} values={CATEGORIAS} onChange={this.onChangeBreed} />
            <FormInput label={'Cantidad:'} onChangeText={this.onChangeLName} />
            <DropDown label={'Raza:'} selected={breedId} values={RAZAS} onChange={this.onChangeBreed} />
            <FormInput label={'Peso:'} onChangeText={this.onChangeWeight} />
            <FormInput label={'Departamento:'} selected={stateId} values={DEPARTAMENTOS} onChangeText={this.onChangeState} />
            <FormInput label={'Precio por Kg:'} onChangeText={this.onChangeEmail} />
            <FormInput label={'Comentarios:'} onChangeText={this.onChangePassword} />
          </View>
        </ScrollView>
      </View>
    );
  }
}

PublishScreen.propTypes = {
  navigation: PropTypes.shape().isRequired,
};
