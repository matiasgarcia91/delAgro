import { connect } from 'react-redux';
import { changeVisibleItemsChange } from '../reducers/homeScreenReducer';
import { fetchAllLots } from '../reducers/lots';

import HomeScreen from '../components/HomeScreen';

function mapStateToProps({ lots: { allLots }, session: { token } }) {
  return { allLots, token };
}
export default connect(
  mapStateToProps,
  { changeVisibleItemsChange, fetchAllLots },
)(HomeScreen);
