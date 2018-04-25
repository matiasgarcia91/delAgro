import { connect } from 'react-redux';

import FilterScreen from '../components/FilterScreen';
import { registerUser } from '../reducers/login';

export default connect(null, { registerUser })(FilterScreen);
