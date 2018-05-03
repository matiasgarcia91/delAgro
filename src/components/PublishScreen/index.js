import React, { PureComponent } from 'react';
import { View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import NavBarPublish from '../../containers/NavBarPublishContainer';
import styles from './styles';
import FormInput from '../FormInput';
import DropDown from '../DropDown';

export default class PublishScreen extends PureComponent {
  constructor() {
    super();
    this.state = {
      category: null,
      breed: null,
      state: null,
      quantity: '',
      price: '',
      description: '',
    };
    this.onChangeBreed = this.onChangeBreed.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangeState = this.onChangeState.bind(this);
    this.onChangeWeight = this.onChangeWeight.bind(this);
    this.onChangeComments = this.onChangeComments.bind(this);
    this.onChangeQuantity = this.onChangeQuantity.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
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
    this.setState({ description: comments });
  }

  onSubmit(video) {
    const {
      category,
      breed,
      state,
      quantity,
      price,
      weight,
      description,
    } = this.state;

    this.props.submitLot({
      category_id: category.id,
      breed_id: breed.id,
      state,
      quantity,
      weight,
      video,
      price,
      description,
    });
  }

  render() {
    const { breed, category, state } = this.state;
    const { categories, breeds, states } = this.props;
    const mapStates = states.map(item => ({ id: item, name: item }));
    return (
      <View style={styles.container}>
        <NavBarPublish navigation={this.props.navigation} submitLot={this.onSubmit} />
        <ScrollView>
          <View style={styles.formContainer}>
            <DropDown label={'Categoria:'} selected={category} values={categories} onChange={this.onChangeCategory} />
            <FormInput label={'Cantidad:'} onChangeText={this.onChangeQuantity} />
            <DropDown label={'Raza:'} selected={breed} values={breeds} onChange={this.onChangeBreed} />
            <FormInput label={'Peso:'} onChangeText={this.onChangeWeight} />
            <DropDown label={'Departamento:'} selected={state} values={mapStates} onChange={this.onChangeState} />
            <FormInput label={'Precio por Kg:'} onChangeText={this.onChangePrice} />
            <FormInput label={'Comentarios:'} onChangeText={this.onChangeComments} multiline />
          </View>
        </ScrollView>
      </View>
    );
  }
}

PublishScreen.propTypes = {
  navigation: PropTypes.shape().isRequired,
  submitLot: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  breeds: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  states: PropTypes.arrayOf(PropTypes.string).isRequired
};
