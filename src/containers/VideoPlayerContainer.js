import { connect } from 'react-redux';

import VideoPlayer from '../components/VideoPlayer';

function mapStateToProps({ homeScreen }) {
  return {
    visibleItems: homeScreen.visibleItems,
  };
}

export default connect(mapStateToProps, null)(VideoPlayer);
