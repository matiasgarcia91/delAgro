import { connect } from 'react-redux';
import { changeVisibleItemsChange } from '../actions/homeScreen';

import { clearFilters } from '../reducers/filters';

import FilteredHome from '../components/FilteredHome';

function mapStateToProps({ filters: { filteredLots }, session: { token } }) {
  return { filteredLots, token };
}
export default connect(
  mapStateToProps,
  { changeVisibleItemsChange, clearFilters },
)(FilteredHome);
