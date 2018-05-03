import { connect } from 'react-redux';

import DetailsCardFooter from '../components/DetailsCardFooter';

function mapStateToProps({ staticData: { categories, breeds } }) {
  return { categories, breeds };
}
export default connect(
  mapStateToProps,
  {},
)(DetailsCardFooter);
