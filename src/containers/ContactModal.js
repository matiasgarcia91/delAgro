import { connect } from 'react-redux';

import ContactModal from '../components/modals/ContactModal';

function mapStateToProps({ staticData: { contacts } }) {
  return { contacts };
}

export default connect(mapStateToProps, null)(ContactModal);
