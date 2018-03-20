import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';

import filters from '../../helpers/filterStaticData';
import MainButton from '../MainButton';
import styles from './styles';

export default class CardFooter extends PureComponent {
  constructor(props) {
    super(props);
    this.onPressDetails = this.onPressDetails.bind(this);
  }
  onPressDetails() {
    const { lot } = this.props;
    this.props.selectLot(lot);
    this.navigate();
  }

  navigate = () => {
    const navigateToDetails = NavigationActions.navigate({
      routeName: 'Details',
      params: { selectedLot: this.props.lot },
    });
    this.props.navigation.dispatch(navigateToDetails);
  };

  render() {
    const { lot: { weight, price, quantity, category_id }, categories } = this.props;
    const category = category_id ? filters.findCategory(category_id, categories) : '';
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.countText}>{quantity} {category}</Text>
          <Text style={styles.weightText}>{weight} kg</Text>
          <Text style={styles.priceText}>${price}/kg</Text>
        </View>
        <View style={styles.buttonContainer}>
          <MainButton title={'DETALLES'} onPress={this.onPressDetails} />
        </View>
      </View>
    );
  }
}

CardFooter.propTypes = {
  navigation: PropTypes.shape().isRequired,
  lot: PropTypes.shape().isRequired,
  selectLot: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
