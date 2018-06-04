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
  constructor() {
    super();
    this.state = {
      category: null,
      breed: null,
      state: null,
      weight: null,
      weight2: null,
    };
    this.onChangeBreed = this.onChangeBreed.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onChangeWeight = this.onChangeWeight.bind(this);
    this.onChangeWeight2 = this.onChangeWeight2.bind(this);
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

  onChangeWeight2(value, index, data) {
    const weight2 = data.find(item => item.id === value);
    this.setState({ weight2 });
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
    const { breed, category, weight, weight2, state } = this.state;
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
                  selected={weight}
                  values={mapWeights}
                  onChange={this.onChangeWeight}
                  double
                />
                <Text style={styles.priceText}> y </Text>
                <View style={{ paddingTop: 3 }}>
                  <DropDown
                    selected={weight2}
                    values={mapWeights}
                    onChange={this.onChangeWeight2}
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
};
