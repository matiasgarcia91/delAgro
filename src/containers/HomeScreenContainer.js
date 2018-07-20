import { connect } from 'react-redux';
import { changeVisibleItemsChange, resetVisibleItems } from '../reducers/homeScreenReducer';
import { fetchAllLots, refreshLots } from '../reducers/lots';

import HomeScreen from '../components/HomeScreen';

function mapStateToProps({ lots: { allLots, uploading, listEnd, isFetching, refreshing } }) {
  return { allLots, uploading, listEnd, isFetching, refreshing };
}
export default connect(
  mapStateToProps,
  { changeVisibleItemsChange, fetchAllLots, refreshLots, resetVisibleItems },
)(HomeScreen);
