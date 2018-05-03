import { connect } from 'react-redux';

import ContactModal from '../components/ContactModal';

function mapStateToProps({ staticData: { contacts } }) {
  return { contacts };
}

export default connect(mapStateToProps, null)(ContactModal);
