import { connect } from 'react-redux';

import CardFooter from '../components/CardFooter';
import { selectLot } from '../reducers/lots';

export default connect(
  null,
  { selectLot },
)(CardFooter);
