import { connect } from 'react-redux';
import { changeVisibleItemsChange } from '../actions/homeScreen';

import FavoritesScreen from '../components/FavoritesScreen';
import { fetchFavorites } from '../reducers/lots';

function mapStateToProps({ lots: { favorites }, session: { token } }) {
  return { favorites, token };
}

export default connect(
  mapStateToProps,
  { fetchFavorites, changeVisibleItemsChange },
)(FavoritesScreen);
