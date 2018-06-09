import { connect } from 'react-redux';
import { changeVisibleItemsChange } from '../reducers/homeScreenReducer';

import FavoritesScreen from '../components/FavoritesScreen';
import { fetchFavorites } from '../reducers/lots';

function mapStateToProps({ lots: { favorites } }) {
  return { favorites };
}

export default connect(
  mapStateToProps,
  { fetchFavorites, changeVisibleItemsChange },
)(FavoritesScreen);
