import React, { PureComponent } from 'react';
import { View, Text, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { NavigationActions } from 'react-navigation';

import styles from './styles';
import DropDown from '../DropDown';
import MainButton from '../MainButton';

import { weights1 } from './constants';

export default class FilterScreen extends PureComponent {
  constructor() {
    super();
    this.state = {
      category: null,
      breed: null,
      state: null,
      weight: null,
    };
    this.onChangeBreed = this.onChangeBreed.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onChangeWeight = this.onChangeWeight.bind(this);
    this.onChangeState = this.onChangeState.bind(this);
  }

  onChangeCategory(value, index, data) {
    const category = data.find(item => item.id === value);
    this.setState({ category });
  }

  onChangeBreed(value, index, data) {
    const breed = data.find(item => item.id === value);
    this.setState({ breed });
  }

  onChangeState(value, index, data) {
    const state = data.find(item => item.id === value);
    this.setState({ state });
  }

  onChangeWeight(value, index, data) {
    const weight = data.find(item => item.id === value);
    this.setState({ weight });
  }

  onSubmit() {
    // TODO: set filters on redux, (own reducer);
    this.navigate();
  }

  navigate = () => {
    const navigateToDetails = NavigationActions.navigate({
      routeName: 'FilteredHome',
    });
    this.props.navigation.dispatch(navigateToDetails);
  };

  render() {
    const { categories, breeds, states } = this.props;
    const { breed, category, weight, state } = this.state;
    const mapWeights = weights1.map(item => ({ id: item, name: item }));
    const mapStates = states.map(item => ({ id: item, name: item }));
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text>Filtrar Busqueda</Text>
          <View style={styles.formContainer}>
            <DropDown label={'Categoria:'} selected={category} values={categories} onChange={this.onChangeCategory} />
            <DropDown label={'Raza:'} selected={breed} values={breeds} onChange={this.onChangeBreed} />
            <DropDown label={'Peso:'} selected={weight} values={mapWeights} onChangeText={this.onChangeWeight} />
            <DropDown label={'Departamento:'} selected={state} values={mapStates} onChange={this.onChangeState} />
          </View>
        </ScrollView>
      </View>
    );
  }
}

FilterScreen.propTypes = {
  navigation: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  breeds: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  states: PropTypes.arrayOf(PropTypes.string).isRequired,
};
