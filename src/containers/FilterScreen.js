import { connect } from 'react-redux';

import FilterScreen from '../components/FilterScreen';
import { fetchFilteredLots } from '../reducers/filters';

function mapStateToProps({ staticData: { categories, breeds, states } }) {
  return { categories, breeds, states };
}

export default connect(mapStateToProps, { fetchFilteredLots })(FilterScreen);
