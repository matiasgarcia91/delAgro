import { connect } from 'react-redux';

import LoginScreen from '../components/LoginScreen';
import { login } from '../reducers/login';

export default connect(null, { login })(LoginScreen);
