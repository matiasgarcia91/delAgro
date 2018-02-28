import { connect } from 'react-redux';
import { uploadVideo } from '../actions/upload';

import NavBarPublish from '../components/NavBarPublish';

export default connect(null, { uploadVideo })(NavBarPublish);
