import { connect } from 'react-redux';

import LoginScreen from '../components/LoginScreen';
import { login, toRegister, toCamera } from '../actions';

export default connect(null, { login, toRegister })(LoginScreen);
