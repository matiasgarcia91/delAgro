import { connect } from 'react-redux';

import LoginScreen from '../components/LoginScreen';
import { login } from '../reducers/login';

function mapStateToProps({ session: { pending } }) {
  return { pending };
}

export default connect(mapStateToProps, { login })(LoginScreen);
