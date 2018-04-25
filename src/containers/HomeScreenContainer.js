import { connect } from 'react-redux';
import { changeVisibleItemsChange } from '../actions/homeScreen';
import { fetchAllLots, getStaticData } from '../reducers/lots';

import HomeScreen from '../components/HomeScreen';

function mapStateToProps({ lots: { allLots }, session: { token } }) {
  return { allLots, token };
}
export default connect(
  mapStateToProps,
  { changeVisibleItemsChange, fetchAllLots, getStaticData },
)(HomeScreen);
