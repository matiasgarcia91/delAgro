import { connect } from 'react-redux';

import LoginScreen from '../components/LoginScreen';
import { login } from '../reducers/login';

function mapStateToProps({ session }) {
  return { 
    pending: session.pending,
    loginError: session.error,
  };
}

export default connect(mapStateToProps, { login })(LoginScreen);
