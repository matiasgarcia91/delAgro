import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';

import MainButton from '../MainButton';
import { getPriceUnit } from '../../helpers/priceUnit';

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
    const { lot: { price, quantity, category, title } } = this.props;
    const unit = getPriceUnit(category.id);
    return (
      <View style={styles.border}>
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <Text style={styles.countText}>{title}</Text>
            <Text style={styles.priceText}>US${price} {unit}</Text>
            <Text style={styles.weightText}>{quantity} {category.name}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <MainButton title={'DETALLES'} onPress={this.onPressDetails} />
          </View>
        </View>
      </View>
    );
  }
}

CardFooter.propTypes = {
  navigation: PropTypes.shape().isRequired,
  lot: PropTypes.shape().isRequired,
  selectLot: PropTypes.func.isRequired,
};
