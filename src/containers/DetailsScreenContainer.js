import { connect } from 'react-redux';

import DetailsScreen from '../components/DetailsScreen';

function mapStateToProps({ lots: { categories, breeds, selected } }) {
  return { categories, breeds, selected };
}
export default connect(
  mapStateToProps,
  {},
)(DetailsScreen);
