import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableHighlight, Text } from 'react-native';
import { NavigationActions } from 'react-navigation';

import styles from './styles';

export default class NavBarPublish extends PureComponent {
  constructor(props) {
    super(props);
    this.navigate = this.navigate.bind(this);
  }
  navigate() {
    const navigateToDetails = NavigationActions.navigate({
      routeName: 'HomeIn',
    });
    this.props.navigation.dispatch(navigateToDetails);
  }

  render() {
    const { submitLot, handleSubmit } = this.props;
    return (
      <View style={styles.bar} >
        <TouchableHighlight onPress={this.navigate}>
          <Text style={styles.sideButtons}>Cancelar</Text>
        </TouchableHighlight>
        <TouchableHighlight>
          <Text style={styles.title} >Completar datos</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={handleSubmit(submitLot)}>
          <Text style={styles.sideButtons}>Subir</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

NavBarPublish.propTypes = {
  navigation: PropTypes.shape(),
  submitLot: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

NavBarPublish.defaultProps = {
  navigation: {},
};
