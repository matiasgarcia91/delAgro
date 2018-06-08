import { connect } from 'react-redux';

import FilterScreen from '../components/FilterScreen';
import { fetchFilteredLots } from '../reducers/filters';

function mapStateToProps({ staticData: { categories, breeds, states }, session: { loggedIn } }) {
  return { categories, breeds, states, loggedIn };
}

export default connect(mapStateToProps, { fetchFilteredLots })(FilterScreen);
