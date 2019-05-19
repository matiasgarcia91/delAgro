import React, { PureComponent } from 'react';
import { View, Text, ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import DropDown from '../DropDown';
import MainButton from '../MainButton';
import NavBarBack from '../NavBarBack';
import stateTranslations from '../../helpers/stateTranslations';

import { weights1 } from './constants';

export default class FilterScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      category: null,
      breed: null,
      state: null,
      weightMin: null,
      weightMax: null,
    };
    this.onChangeBreed = this.onChangeBreed.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onChangeWeightMin = this.onChangeWeightMin.bind(this);
    this.onChangeWeightMax = this.onChangeWeightMax.bind(this);
    this.onChangeState = this.onChangeState.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
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

  onChangeWeightMin(value, index, data) {
    const { weightMax } = this.state;
    const weightMin = data.find(item => item.id === value);
    if (weightMax && weightMin.name > weightMax.name) {
      this.setState({ weightMax: null });
    }
    this.setState({ weightMin });
  }

  onChangeWeightMax(value, index, data) {
    const weightMax = data.find(item => item.id === value);
    this.setState({ weightMax });
  }

  onSubmit() {
    const { fetchFilteredLots } = this.props;
    const {
      category,
      breed,
      state,
      weightMin: min,
      weightMax: max,
    } = this.state;
    const categoryId = category && category.id;
    const breedId = breed && breed.id;
    const stateId = state && state.id;
    const weightMin = min && min.id;
    const weightMax = max && max.id;

    fetchFilteredLots({ categoryId, breedId, stateId, weightMin, weightMax });
  }

  render() {
    const { categories, breeds, states } = this.props;
    const { breed, category, weightMin, weightMax, state } = this.state;
    const mapWeights = weights1.map(item => ({ id: item, name: item }));
    const mapWeightsMax = mapWeights.filter(w => !weightMin || w.name >= weightMin.name);
    const mapStates = states.map(item => ({ id: item, name: stateTranslations[item] }));
    const disabled = breed || category || weightMin || weightMax || state;
    return (
      <View style={{ flex: 1 }}>
        <NavBarBack navigation={this.props.navigation} title={''} />
        <View style={styles.container}>
          <ScrollView>
            <Text style={styles.titleText}>Filtrar Busqueda</Text>
            <View style={styles.formContainer}>
              <DropDown label={'Categoria:'} selected={category} values={categories} onChange={this.onChangeCategory} />
              <DropDown label={'Raza:'} selected={breed} values={breeds} onChange={this.onChangeBreed} />
              <View style={styles.priceContainer}>
                <DropDown
                  label={'Peso entre:'}
                  selected={weightMin}
                  values={mapWeights}
                  onChange={this.onChangeWeightMin}
                  double
                />
                <Text style={styles.priceText}> y </Text>
                <DropDown
                  label={' '}
                  selected={weightMax}
                  values={mapWeightsMax}
                  onChange={this.onChangeWeightMax}
                  double
                />
              </View>
              <DropDown label={'Departamento:'} selected={state} values={mapStates} onChange={this.onChangeState} />
              <MainButton onPress={this.onSubmit} title={'FILTRAR'} style={styles.bigButton} disabled={!disabled} />
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

FilterScreen.propTypes = {
  navigation: PropTypes.shape().isRequired,
  categories: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  breeds: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  states: PropTypes.arrayOf(PropTypes.string).isRequired,
  fetchFilteredLots: PropTypes.func.isRequired,
};
