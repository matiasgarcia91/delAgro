import { connect } from 'react-redux';
import { submitLot } from '../reducers/lots';

import PublishScreen from '../components/PublishScreen';

function mapStateToProps({ lots: { categories, breeds, states } }) {
  return { categories, breeds, states };
}

export default connect(
  mapStateToProps,
  { submitLot },
)(PublishScreen);
