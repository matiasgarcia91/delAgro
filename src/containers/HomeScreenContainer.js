import { connect } from 'react-redux';
import { changeVisibleItemsChange } from '../reducers/homeScreenReducer';
import { fetchAllLots } from '../reducers/lots';

import HomeScreen from '../components/HomeScreen';

function mapStateToProps({ lots: { allLots, uploading } }) {
  return { allLots, uploading };
}
export default connect(
  mapStateToProps,
  { changeVisibleItemsChange, fetchAllLots },
)(HomeScreen);
