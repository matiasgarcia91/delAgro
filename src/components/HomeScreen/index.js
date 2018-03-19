import React, { PureComponent } from 'react';
import { View, FlatList } from 'react-native';
import PropTypes from 'prop-types';

import NavBarHome from '../../containers/NavBarHomeContainer';
import CardItem from '../CardItem';

const lots = [
  { key: 'a', quantity: 103, weight: 400, price: '1.24', location: 'Paysandu', breed: 'Hereford', inspectionDate: '12/01/91', comments: 'Some Comments', uri: 'https://player.vimeo.com/external/255985812.m3u8?s=68efe184a31448142948def47515696ef3cb4ec6' },
  { key: 'b', quantity: 103, weight: 400, price: '1.24', location: 'Paysandu', breed: 'Hereford', inspectionDate: '12/01/91', comments: 'Some Comments', uri: 'https://player.vimeo.com/external/255985812.m3u8?s=68efe184a31448142948def47515696ef3cb4ec6' },
  { key: 'c', quantity: 103, weight: 400, price: '1.24', location: 'Paysandu', breed: 'Hereford', inspectionDate: '12/01/91', comments: 'Some Comments', uri: 'https://player.vimeo.com/external/255985812.m3u8?s=68efe184a31448142948def47515696ef3cb4ec6' },
  { key: 'd', quantity: 103, weight: 400, price: '1.24', location: 'Paysandu', breed: 'Hereford', inspectionDate: '12/01/91', comments: 'Some Comments', uri: 'https://player.vimeo.com/external/255985812.m3u8?s=68efe184a31448142948def47515696ef3cb4ec6' },
  { key: 'e', quantity: 103, weight: 400, price: '1.24', location: 'Paysandu', breed: 'Hereford', inspectionDate: '12/01/91', comments: 'Some Comments', uri: 'https://player.vimeo.com/external/255985812.m3u8?s=68efe184a31448142948def47515696ef3cb4ec6' },
  { key: 'f', quantity: 103, weight: 400, price: '1.24', location: 'Paysandu', breed: 'Hereford', inspectionDate: '12/01/91', comments: 'Some Comments', uri: 'https://player.vimeo.com/external/255985812.m3u8?s=68efe184a31448142948def47515696ef3cb4ec6' },
];

export default class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.onViewableItemsChanged = this.onViewableItemsChanged.bind(this);
    this.renderItem = this.renderItem.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllLots();
  }

  onViewableItemsChanged({ viewableItems }) {
    const visibleItems = viewableItems.map(item => item.key);
    this.props.changeVisibleItemsChange(visibleItems);
  }

  renderItem({ item: { key, navigation, lot } }) {
    return (
      <CardItem id={key} key={key} navigation={navigation} lot={lot} />
    );
  }

  render() {
    const data =
      lots.map(item => ({ key: item.key, navigation: this.props.navigation, lot: item }));
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <NavBarHome navigation={this.props.navigation} />
        </View>
        <View style={{ flex: 8 }}>
          <FlatList
            data={data}
            renderItem={this.renderItem}
            onViewableItemsChanged={this.onViewableItemsChanged}
          />
        </View>
      </View>
    );
  }
}

Home.propTypes = {
  navigation: PropTypes.shape().isRequired,
  changeVisibleItemsChange: PropTypes.func.isRequired,
  fetchAllLots: PropTypes.func.isRequired,
};
