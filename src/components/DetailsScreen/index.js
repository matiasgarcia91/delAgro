import React, { PureComponent } from 'react';
import { View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import NavBarBack from '../../components/NavBarBack';
import CardItem from '../CardItem';
import DetailsText from '../DetailsText';

export default class DetailsScreen extends PureComponent {
  render() {
    const { selected, breed, category } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <NavBarBack navigation={this.props.navigation} />
        </View>
        <View style={{ flex: 8 }}>
          <ScrollView>
            <CardItem lot={selected} category={category} details />
            <DetailsText lot={selected} category={category} breed={breed} />
          </ScrollView>
        </View>
      </View>
    );
  }
}

DetailsScreen.propTypes = {
  navigation: PropTypes.shape().isRequired,
  selected: PropTypes.shape(),
  breed: PropTypes.string,
  category: PropTypes.string,
};

DetailsScreen.defaultProps = {
  selected: null,
  breed: '',
  category: '',
};
