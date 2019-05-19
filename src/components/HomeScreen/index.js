import React, { Component } from 'react';
import { View, FlatList, Text, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

import NavBarHome from '../NavBarHome';
import CardItem from '../CardItem';
import LoadingBanner from '../LoadingBanner';
import FullScreenVideo from '../VideoPlayer/FullScreenVideo';
import styles from './styles';

/* const UploadBanner = () => (
  <View style={styles.bar}>
    <View style={{ flex: 3, alignItems: 'center' }}>
      <Text style={styles.text}>Subiendo Publicación</Text>
    </View>
    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', marginRight: 40 }}>
      <ActivityIndicator size="small" color="#ff5000" />
    </View>
  </View>
); */

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      flatListReady: false,
    };
    this.onViewableItemsChanged = this.onViewableItemsChanged.bind(this);
    this.renderItem = this.renderItem.bind(this);
    this.onListEnd = this.onListEnd.bind(this);
    this.onScrolled = this.onScrolled.bind(this);
    this.onRefresh = this.onRefresh.bind(this);
  }

  componentDidMount() {
    const { allLots, fetchAllLots, resetVisibleItems } = this.props;
    resetVisibleItems();
    if (allLots.length === 0) return fetchAllLots();
    const nrLots = allLots.length / 5;
    const page = nrLots.toFixed(0) === 0 ? 1 : Number(nrLots.toFixed(0));
    return this.setState({ page });
  }

  onScrolled() {
    this.setState({ flatListReady: true });
  }

  onViewableItemsChanged({ viewableItems }) {
    const visibleItems = viewableItems.map(item => item.key);
    this.props.changeVisibleItemsChange(visibleItems);
  }

  onListEnd() {
    const { page, flatListReady } = this.state;
    const { listEnd, fetchAllLots, isFetching } = this.props;
    if (!flatListReady || listEnd || isFetching) return null;
    const newPage = page + 1;
    return this.setState({
      page: newPage,
      flatListReady: false,
    }, () => fetchAllLots(newPage));
  }

  onRefresh() {
    const { refreshLots } = this.props;
    return this.setState({
      page: 1,
      flatListReady: false,
    }, () => refreshLots());
  }
  renderItem({ item: { key, navigation, lot } }) {
    return (
      <CardItem key={key} navigation={navigation} lot={lot} />
    );
  }


  render() {
    const list = this.props.allLots;
    const { navigation, uploading, refreshing } = this.props;
    const { params } = navigation.state;
    const landscape = params ? params.fullScreen : false;
    const videoFullScreen = params && params.videofs ? params.videofs : false;
    const data =
      list.map(item => ({ key: `${item.id}`, navigation, lot: item }));
    return (
      <View style={{ flex: 1 }}>
        { !videoFullScreen && <NavBarHome navigation={navigation} />}
        { videoFullScreen && <FullScreenVideo uri={videoFullScreen} navigation={navigation} /> }
        <View style={{ flex: 8 }}>
          {uploading && <LoadingBanner title="Subiendo Publicación" />}
          {list.length !== 0 &&
            <FlatList
              scrollEnabled={!landscape}
              onScroll={this.onScrolled}
              data={data}
              renderItem={this.renderItem}
              onViewableItemsChanged={this.onViewableItemsChanged}
              onEndReached={this.onListEnd}
              onEndReachedThreshold={0.5}
              refreshing={refreshing}
              onRefresh={this.onRefresh}
            />}
        </View>
      </View>
    );
  }
}

Home.propTypes = {
  navigation: PropTypes.shape().isRequired,
  changeVisibleItemsChange: PropTypes.func.isRequired,
  fetchAllLots: PropTypes.func.isRequired,
  allLots: PropTypes.arrayOf(PropTypes.shape).isRequired,
  uploading: PropTypes.bool.isRequired,
  listEnd: PropTypes.bool.isRequired,
  isFetching: PropTypes.bool.isRequired,
  refreshLots: PropTypes.func.isRequired,
  refreshing: PropTypes.bool.isRequired,
  resetVisibleItems: PropTypes.func.isRequired,
};

Home.defaultProps = {
  token: null,
};
