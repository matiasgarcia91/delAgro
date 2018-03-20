import { connect } from 'react-redux';

import CardFooter from '../components/CardFooter';
import { selectLot } from '../reducers/lots';

function mapStateToProps({ lots: { categories, breeds } }) {
  return { categories, breeds };
}

export default connect(mapStateToProps, { selectLot })(CardFooter);
