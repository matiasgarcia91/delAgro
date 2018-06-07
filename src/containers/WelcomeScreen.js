import { connect } from 'react-redux';

import WelcomeScreen from '../components/WelcomeScreen';
import { getStaticData } from '../reducers/staticData';

function mapStateToProps({ session: { loggedIn } }) {
  return { loggedIn };
}

export default connect(mapStateToProps, { getStaticData })(WelcomeScreen);
