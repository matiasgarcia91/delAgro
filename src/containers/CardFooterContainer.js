import { connect } from 'react-redux';

import CardFooter from '../components/CardFooter';
import { selectLot } from '../reducers/lots';

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps, { selectLot })(CardFooter);
