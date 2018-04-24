import { connect } from 'react-redux';

import ContactModal from '../components/ContactModal';

function mapStateToProps({ lots: { contacts } }) {
  return { contacts };
}

export default connect(mapStateToProps, null)(ContactModal);
