import { connect } from 'react-redux';

import MyProfile from '../components/MyProfile';
import { updateUserData } from '../reducers/login';

function mapStateToProps({ staticData: { states }, session: { userData } }) {
  return { states, initialValues: userData };
}
export default connect(mapStateToProps, { updateUserData })(MyProfile);
