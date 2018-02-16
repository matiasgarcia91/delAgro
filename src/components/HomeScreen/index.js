import React, { PureComponent } from 'react';
import { View, FlatList } from 'react-native';
import PropTypes from 'prop-types';

import NavBar from '../../containers/NavBarContainer';
import CardItem from '../CardItem';

export default class Home extends PureComponent {
  renderItem({ item: { key } }) {
    return (
      <CardItem key={key} />
    );
  }

  render() {
    const keys = [{ key: 'a' }, { key: 'b' }, { key: 'c' }, { key: 'd' }, { key: 'e' }];
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <NavBar navigation={this.props.navigation} />
        </View>
        <View style={{ flex: 8 }}>
          <FlatList
            data={keys}
            renderItem={this.renderItem}
          />
          <CardItem />
        </View>
      </View>
    );
  }
}

Home.propTypes = {
  navigation: PropTypes.shape().isRequired,
};
