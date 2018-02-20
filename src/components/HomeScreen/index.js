import React, { PureComponent } from 'react';
import { View, FlatList } from 'react-native';
import PropTypes from 'prop-types';

import NavBarHome from '../../containers/NavBarHomeContainer';
import CardItem from '../CardItem';

export default class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.onViewableItemsChanged = this.onViewableItemsChanged.bind(this);
  }

  onViewableItemsChanged({ viewableItems }) {
    const visibleItems = viewableItems.map(item => item.key);
    this.props.changeVisibleItemsChange(visibleItems);
  }

  renderItem({ item: { key } }) {
    return (
      <CardItem id={key} key={key} />
    );
  }

  render() {
    const keys = [{ key: 'a' }, { key: 'b' }, { key: 'c' }, { key: 'd' }, { key: 'e' }, { key: 'f' }];

    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <NavBarHome navigation={this.props.navigation} />
        </View>
        <View style={{ flex: 8 }}>
          <FlatList
            data={keys}
            renderItem={this.renderItem}
            onViewableItemsChanged={this.onViewableItemsChanged}
          />
          <CardItem />
        </View>
      </View>
    );
  }
}

Home.propTypes = {
  navigation: PropTypes.shape().isRequired,
  changeVisibleItemsChange: PropTypes.func.isRequired,
};
