import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import { getPriceUnit } from '../../helpers/priceUnit';

export default class DetailsCardFooter extends PureComponent {
  render() {
    const { lot: { quantity, price, category } } = this.props;
    const unit = getPriceUnit(category.id);
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.countText}>{quantity} {category.name}</Text>
          <Text style={styles.priceText}>${price} {unit}</Text>
        </View>
        <View style={styles.favContainer} />
      </View>
    );
  }
}

DetailsCardFooter.propTypes = {
  lot: PropTypes.shape().isRequired,
};
