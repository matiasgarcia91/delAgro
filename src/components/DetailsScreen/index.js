import React, { PureComponent } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import NavBarBack from '../../components/NavBarBack';
import CardItem from '../CardItem';
import DetailsText from '../DetailsText';

const offer = {
  quantity: 200,
  location: 'Paysandu',
  breed: 'Hereford',
  weight: 400,
  inspectionDate: '12/01/91',
  comments: 'Some Comments',
};

export default class DetailsScreen extends PureComponent {
  render() {
    const { quantity, location, breed, weight, inspectionDate, comments } = offer;
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <NavBarBack navigation={this.props.navigation} />
        </View>
        <View style={{ flex: 8 }}>
          <CardItem />
          <DetailsText
            quantity={quantity}
            location={location}
            breed={breed}
            weight={weight}
            inspectionDate={inspectionDate}
            comments={comments}
          />
        </View>
      </View>
    );
  }
}

DetailsScreen.propTypes = {
  navigation: PropTypes.shape().isRequired,
};
