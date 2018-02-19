import { connect } from 'react-redux';

import NavBarHome from '../components/NavBarHome';
import { toCamera } from '../actions/homeNavigation';

export default connect(null, { toCamera })(NavBarHome);
