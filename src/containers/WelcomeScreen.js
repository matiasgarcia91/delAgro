import { connect } from 'react-redux';

import WelcomeScreen from '../components/WelcomeScreen';

function mapStateToProps({ session: { loggedIn } }) {
  return { loggedIn };
}

export default connect(mapStateToProps, null)(WelcomeScreen);
