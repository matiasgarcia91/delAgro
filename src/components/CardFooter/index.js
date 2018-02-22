import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';

import MainButton from '../MainButton';
import styles from './styles';

export default class CardFooter extends PureComponent {
  navigate = () => {
    const navigateToDetails = NavigationActions.navigate({
      routeName: 'Details',
    });
    this.props.navigation.dispatch(navigateToDetails);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.countText}>103 Vaquillonas</Text>
          <Text style={styles.weightText}>380-400 kg</Text>
          <Text style={styles.priceText}>$1.24/kg</Text>
        </View>
        <View style={styles.buttonContainer}>
          <MainButton title={'DETALLES'} onPress={this.navigate} />
        </View>
      </View>
    );
  }
}

CardFooter.propTypes = {
  navigation: PropTypes.shape().isRequired,
};
