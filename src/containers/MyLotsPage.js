import { connect } from 'react-redux';
import { changeVisibleItemsChange } from '../reducers/homeScreenReducer';

import MyLotsPage from '../components/MyLotsPage';
import { fetchMyLots } from '../reducers/lots';

function mapStateToProps({ lots: { myLots } }) {
  return { myLots };
}

export default connect(mapStateToProps, { fetchMyLots, changeVisibleItemsChange })(MyLotsPage);
