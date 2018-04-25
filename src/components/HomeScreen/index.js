import React, { PureComponent } from 'react';
import { View, FlatList } from 'react-native';
import PropTypes from 'prop-types';

import NavBarHome from '../../containers/NavBarHomeContainer';
import CardItem from '../CardItem';

export default class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.onViewableItemsChanged = this.onViewableItemsChanged.bind(this);
    this.renderItem = this.renderItem.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllLots();
    this.props.getStaticData();
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
    const list = this.props.allLots;
    const isLoggedIn = !!this.props.token;
    const data =
      list.map(item => ({ key: item.key, navigation: this.props.navigation, lot: item }));
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <NavBarHome navigation={this.props.navigation} isLoggedIn={isLoggedIn} />
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
  getStaticData: PropTypes.func.isRequired,
  allLots: PropTypes.arrayOf(PropTypes.shape).isRequired,
  token: PropTypes.string,
};

Home.defaultProps = {
  token: null,
};
