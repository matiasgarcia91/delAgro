import { connect } from 'react-redux';

import RegisterScreen from '../components/RegisterScreen';
import { registerUser } from '../reducers/login';

function mapStateToProps({ staticData: { states }, session: { pending } }) {
  return { states, pending };
}
export default connect(mapStateToProps, { registerUser })(RegisterScreen);
