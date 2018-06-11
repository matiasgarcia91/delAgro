import React, { PureComponent } from 'react';
import { View, FlatList, Text } from 'react-native';
import PropTypes from 'prop-types';

import NavBarHome from '../NavBarHome';
import CardItem from '../CardItem';

import styles from './styles';

export default class MyLotsPage extends PureComponent {
  constructor(props) {
    super(props);
    this.onViewableItemsChanged = this.onViewableItemsChanged.bind(this);
    this.renderItem = this.renderItem.bind(this);
  }

  componentDidMount() {
    this.props.fetchMyLots();
  }

  onViewableItemsChanged({ viewableItems }) {
    const visibleItems = viewableItems.map(item => item.key);
    this.props.changeVisibleItemsChange(visibleItems);
  }

  renderItem({ item: { key, navigation, lot } }) {
    return (
      <CardItem key={key} navigation={navigation} lot={lot} />
    );
  }

  render() {
    const list = this.props.myLots;
    const data =
      list.map(item => ({ key: `${item.id}`, navigation: this.props.navigation, lot: item }));
    return (
      <View style={{ flex: 1 }}>
        <NavBarHome navigation={this.props.navigation} />
        <View style={{ flex: 8 }}>
          <View style={styles.bar}>
            <Text style={styles.text}>Mis Publicaciones</Text>
          </View>
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

MyLotsPage.propTypes = {
  navigation: PropTypes.shape().isRequired,
  changeVisibleItemsChange: PropTypes.func.isRequired,
  fetchMyLots: PropTypes.func.isRequired,
  myLots: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

MyLotsPage.defaultProps = {
  token: null,
};
