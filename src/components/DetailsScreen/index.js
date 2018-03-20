import React, { PureComponent } from 'react';
import { View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import NavBarBack from '../../components/NavBarBack';
import CardItem from '../CardItem';
import DetailsText from '../DetailsText';

export default class DetailsScreen extends PureComponent {
  render() {
    const lot = this.props.selected || this.props.navigation.state.params.selectedLot;
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
  selected: PropTypes.shape(),
};

DetailsScreen.defaultProps = {
  selected: null,
};
