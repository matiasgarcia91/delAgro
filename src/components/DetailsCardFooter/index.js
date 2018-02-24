import React, { PureComponent } from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import favouriteBlank from '../../assets/images/icons/star.png';
import favouriteYellow from '../../assets/images/icons/starYellow.png';

export default class DetailsCardFooter extends PureComponent {
  render() {
    const { lot: { quantity, price }, favourite } = this.props;
    const src = favourite ? favouriteYellow : favouriteBlank;
    const favText = favourite ? 'Favorito' : 'Guardar';
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.countText}>{quantity} Vaquillonas</Text>
          <Text style={styles.priceText}>${price}/kg</Text>
        </View>
        <View style={styles.favContainer}>
          <TouchableWithoutFeedback style={styles.favStar} onPress={() => console.log('me hago favorito')} >
            <Image source={src} style={styles.favStar} />
          </TouchableWithoutFeedback>
          <Text style={styles.favText}>{favText}</Text>
        </View>
      </View>
    );
  }
}

DetailsCardFooter.propTypes = {
  lot: PropTypes.shape().isRequired,
  favourite: PropTypes.bool,
};

DetailsCardFooter.defaultProps = {
  favourite: false,
};
