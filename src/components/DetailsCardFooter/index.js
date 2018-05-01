import React, { PureComponent } from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import favouriteBlank from '../../assets/images/icons/star.png';
import favouriteYellow from '../../assets/images/icons/starYellow.png';
import { getPriceUnit } from '../../helpers/priceUnit';

export default class DetailsCardFooter extends PureComponent {
  // Provisorio para dar aparentar que podes guardar a favoritos
  constructor(props) {
    super(props);
    this.state = {
      favourite: this.props.favourite,
    };
    this.toggleFavourite = this.toggleFavourite.bind(this);
  }

  toggleFavourite() {
    const { favourite } = this.state;
    const { lot, setFavorite } = this.props;
    this.setState({ favourite: !favourite });
    setFavorite({ lotId: lot.id });
  }

  render() {
    const { lot: { quantity, price, category } } = this.props;
    const { favourite } = this.state;
    const src = favourite ? favouriteYellow : favouriteBlank;
    const favText = favourite ? 'Favorito' : 'Guardar';
    const unit = getPriceUnit(category.id);
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.countText}>{quantity} {category.name}</Text>
          <Text style={styles.priceText}>${price} {unit}</Text>
        </View>
        <View style={styles.favContainer}>
          <TouchableWithoutFeedback style={styles.favStar} onPress={this.toggleFavourite} >
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
  category: PropTypes.string,
  setFavorite: PropTypes.func.isRequired,
};

DetailsCardFooter.defaultProps = {
  favourite: false,
  category: '',
};
