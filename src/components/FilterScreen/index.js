import React, { PureComponent } from 'react';
import { View, Text, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { NavigationActions } from 'react-navigation';

import styles from './styles';
import DropDown from '../DropDown';
import MainButton from '../MainButton';
import NavBarBack from '../NavBarBack';

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
    const weightMin = data.find(item => item.id === value);
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

  navigate = () => {
    const navigateToDetails = NavigationActions.navigate({
      routeName: 'FilteredHome',
    });
    this.props.navigation.dispatch(navigateToDetails);
  };

  render() {
    const { categories, breeds, states } = this.props;
    const { breed, category, weightMin, weightMax, state } = this.state;
    const mapWeights = weights1.map(item => ({ id: item, name: item }));
    const mapStates = states.map(item => ({ id: item, name: item }));
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <NavBarBack navigation={this.props.navigation} title={''} />
        </View>
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
                <View style={{ paddingTop: 3 }}>
                  <DropDown
                    selected={weightMax}
                    values={mapWeights}
                    onChange={this.onChangeWeightMax}
                    double
                  />
                </View>
              </View>
              <DropDown label={'Departamento:'} selected={state} values={mapStates} onChange={this.onChangeState} />
              <MainButton onPress={this.onSubmit} title={'FILTRAR'} style={styles.bigButton} />
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
