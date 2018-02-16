import { connect } from 'react-redux';

import NavBar from '../components/NavBar';
import { toCamera } from '../actions/homeNavigation';

export default connect(null, { toCamera })(NavBar);
