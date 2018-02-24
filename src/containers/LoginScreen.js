import { connect } from 'react-redux';

import LoginScreen from '../components/LoginScreen';
import { login } from '../actions';

export default connect(null, { login })(LoginScreen);
