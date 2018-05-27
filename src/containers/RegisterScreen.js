import { connect } from 'react-redux';

import RegisterScreen from '../components/RegisterScreen';
import { registerUser } from '../reducers/login';

function mapStateToProps({ staticData: { states } }) {
  return { states };
}
export default connect(mapStateToProps, { registerUser })(RegisterScreen);
