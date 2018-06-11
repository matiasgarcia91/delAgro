import { connect } from 'react-redux';
import { changeVisibleItemsChange } from '../reducers/homeScreenReducer';

import { clearFilters } from '../reducers/filters';

import FilteredHome from '../components/FilteredHome';

function mapStateToProps({ filters: { filteredLots } }) {
  return { filteredLots };
}
export default connect(
  mapStateToProps,
  { changeVisibleItemsChange, clearFilters },
)(FilteredHome);
