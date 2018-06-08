import { connect } from 'react-redux';
import { changeVisibleItemsChange } from '../actions/homeScreen';

import FilteredHome from '../components/FilteredHome';

function mapStateToProps({ filters: { filteredLots }, session: { token } }) {
  return { filteredLots, token };
}
export default connect(
  mapStateToProps,
  { changeVisibleItemsChange },
)(FilteredHome);
