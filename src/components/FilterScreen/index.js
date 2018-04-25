import React, { PureComponent } from 'react';
import { View, Text, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { NavigationActions } from 'react-navigation';

import styles from './styles';
import FormInput from '../FormInput';
import MainButton from '../MainButton';
import LoginFooter from '../LoginFooter';

export default class FilterScreen extends PureComponent {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
    };
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeLName = this.onChangeLName.bind(this);
  }

  onChangeName(firstName) {
    this.setState({ firstName });
  }

  onChangeLName(lastName) {
    this.setState({ lastName });
  }

  onSubmit() {
    const {
      firstName,
      lastName
    } = this.state;
    const user = {
      firstName,
      lastName
    };
  }


  navigate = () => {
    const navigateToDetails = NavigationActions.navigate({
      routeName: 'Login',
    });
    this.props.navigation.dispatch(navigateToDetails);
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
        <View></View>
          <View style = {styles.lineStyle} />
          <Text style={styles.titleText}>Filtrar Búsqueda</Text>
          <View style={styles.formContainer}>
            <FormInput label={'Nombre:'} onChangeText={this.onChangeName} />
            <FormInput label={'Apellido:'} onChangeText={this.onChangeLName} />
            <MainButton onPress={this.onSubmit} title={'Filtrar'} style={styles.bigButton} />
          </View>
        </ScrollView>
      </View>
    );
  }
}

FilterScreen.propTypes = {
  navigation: PropTypes.func.isRequired,
};
