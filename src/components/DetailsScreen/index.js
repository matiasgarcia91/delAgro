import React, { PureComponent } from 'react';
import { View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import NavBarBack from '../../components/NavBarBack';
import CardItem from '../CardItem';
import DetailsText from '../DetailsText';

const lot = { key: 'a', quantity: 103, weight: 400, price: '1.24', location: 'Paysandu', breed: 'Hereford', inspectionDate: '12/01/91', comments: 'Some Comments', uri: 'https://player.vimeo.com/external/255985812.m3u8?s=68efe184a31448142948def47515696ef3cb4ec6' };

export default class DetailsScreen extends PureComponent {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <NavBarBack navigation={this.props.navigation} />
        </View>
        <View style={{ flex: 8 }}>
          <ScrollView>
            <CardItem lot={lot} details />
            <DetailsText lot={lot} />
          </ScrollView>
        </View>
      </View>
    );
  }
}

DetailsScreen.propTypes = {
  navigation: PropTypes.shape().isRequired,
};
