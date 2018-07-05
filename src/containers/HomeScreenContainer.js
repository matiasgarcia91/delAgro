import { connect } from 'react-redux';
import { changeVisibleItemsChange } from '../reducers/homeScreenReducer';
import { fetchAllLots } from '../reducers/lots';

import HomeScreen from '../components/HomeScreen';

function mapStateToProps({ lots: { allLots, uploading, listEnd, isFetching } }) {
  return { allLots, uploading, listEnd, isFetching };
}
export default connect(
  mapStateToProps,
  { changeVisibleItemsChange, fetchAllLots },
)(HomeScreen);
