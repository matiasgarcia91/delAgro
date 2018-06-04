import { connect } from 'react-redux';

import FilterScreen from '../components/FilterScreen';

function mapStateToProps({ staticData: { categories, breeds, states } }) {
  return { categories, breeds, states };
}

export default connect(mapStateToProps, {})(FilterScreen);
