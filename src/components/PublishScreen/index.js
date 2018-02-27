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
      category: null,
      breed: null,
      state: null,
      quantity: '',
      dob: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
    this.onChangeBreed = this.onChangeBreed.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangeState = this.onChangeState.bind(this);
    this.onChangeWeight = this.onChangeWeight.bind(this);
    this.onChangeComments = this.onChangeComments.bind(this);
    this.onChangeQuantity = this.onChangeQuantity.bind(this);
  }
  onChangeCategory(value, index, data) {
    const category = data.find(item => item.id === value);
    this.setState({ category });
  }

  onChangeQuantity(quantity) {
    this.setState({ quantity });
  }

  onChangeBreed(value, index, data) {
    const breed = data.find(item => item.id === value);
    this.setState({ breed });
  }

  onChangeWeight(weight) {
    this.setState({ weight });
  }

  onChangeState(value, index, data) {
    const state = data.find(item => item.id === value);
    this.setState({ state });
  }

  onChangePrice(price) {
    this.setState({ price });
  }

  onChangeComments(comments) {
    this.setState({ comments });
  }

  render() {
    const { breed, category, state } = this.state;
    return (
      <View style={styles.container}>
        <NavBarPublish navigation={this.props.navigation} />
        <ScrollView>
          <View style={styles.formContainer}>
            <DropDown label={'Categoria:'} selected={category} values={CATEGORIAS} onChange={this.onChangeCategory} />
            <FormInput label={'Cantidad:'} onChangeText={this.onChangeQuantity} />
            <DropDown label={'Raza:'} selected={breed} values={RAZAS} onChange={this.onChangeBreed} />
            <FormInput label={'Peso:'} onChangeText={this.onChangeWeight} />
            <DropDown label={'Departamento:'} selected={state} values={DEPARTAMENTOS} onChange={this.onChangeState} />
            <FormInput label={'Precio por Kg:'} onChangeText={this.onChangeEmail} />
            <FormInput label={'Comentarios:'} onChangeText={this.onChangePassword} multiline />
          </View>
        </ScrollView>
      </View>
    );
  }
}

PublishScreen.propTypes = {
  navigation: PropTypes.shape().isRequired,
};
