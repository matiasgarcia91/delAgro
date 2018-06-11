import React, { PureComponent } from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import NavBarHome from '../NavBarHome';
import CardItem from '../CardItem';

import styles from './styles';

const Button = ({ onPress, title, style }) => (
  <TouchableOpacity
    onPress={onPress}
  >
    <View style={[styles.clearFilters, style]}>
      <View style={{ flex: 3, alignItems: 'center' }}>
        <Text style={styles.buttonText}>{ title }</Text>
      </View>
    </View>
  </TouchableOpacity>
);

Button.propTypes = {
  style: PropTypes.shape(),
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

Button.defaultProps = {
  style: null,
};

export default class FilteredHome extends PureComponent {
  constructor(props) {
    super(props);
    this.onViewableItemsChanged = this.onViewableItemsChanged.bind(this);
    this.renderItem = this.renderItem.bind(this);
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
    const list = this.props.filteredLots;
    const data =
      list.map(item => ({ key: `${item.id}`, navigation: this.props.navigation, lot: item }));
    return (
      <View style={{ flex: 1 }}>
        <NavBarHome navigation={this.props.navigation} />
        <View style={{ flex: 8 }}>
          <View style={styles.bar}>
            <Text style={styles.text}>Filtros Activados</Text>
            <Button title={'Desactivar'} onPress={this.props.clearFilters} />
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

FilteredHome.propTypes = {
  navigation: PropTypes.shape().isRequired,
  changeVisibleItemsChange: PropTypes.func.isRequired,
  clearFilters: PropTypes.func.isRequired,
  filteredLots: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

FilteredHome.defaultProps = {
  token: null,
};
