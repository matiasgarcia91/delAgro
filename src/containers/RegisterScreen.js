import { connect } from 'react-redux';

import RegisterScreen from '../components/RegisterScreen';
import { toLogin } from '../actions';

export default connect(null, { toLogin })(RegisterScreen);
