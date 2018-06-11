import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StatusBar } from 'react-native';
import { connect } from 'react-redux';

import AppWithNavigationState from '../navigation/AppNavigator';
import TermsModal from '../components/modals/TermsModal';
import RegisterModal from '../components/modals/RegisterModal';

import { hideTermsModal, hideRegisterModal } from '../reducers/modals';

class RootContainer extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" />
        <TermsModal toggleModal={hideTermsModal} isVisible={this.props.terms} />
        <RegisterModal toggleModal={hideRegisterModal} isVisible={this.props.register} />
        <AppWithNavigationState />
      </View>
    );
  }
}

RootContainer.propTypes = {
  terms: PropTypes.bool.isRequired,
  register: PropTypes.bool.isRequired,
};

function mapStateToProps({ modals: { terms, register } }) {
  return { terms, register };
}

export default connect(mapStateToProps)(RootContainer);
