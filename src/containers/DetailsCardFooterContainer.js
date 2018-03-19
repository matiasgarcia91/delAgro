import { connect } from 'react-redux';

import DetailsCardFooter from '../components/DetailsCardFooter';

function mapStateToProps({ lots: { categories, breeds } }) {
  return { categories, breeds };
}
export default connect(
  mapStateToProps,
  {},
)(DetailsCardFooter);
