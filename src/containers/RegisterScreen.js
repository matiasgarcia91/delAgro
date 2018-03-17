import { connect } from 'react-redux';

import RegisterScreen from '../components/RegisterScreen';
import { registerUser } from '../reducers/login';

export default connect(null, { registerUser })(RegisterScreen);
