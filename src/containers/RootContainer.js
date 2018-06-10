import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StatusBar } from 'react-native';
import { connect } from 'react-redux';

import AppWithNavigationState from '../navigation/AppNavigator';
import TermsModal from '../components/modals/TermsModal';

import { hideTermsModal } from '../reducers/modals';

class RootContainer extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" />
        <TermsModal toggleModal={hideTermsModal} isVisible={this.props.terms} />
        <AppWithNavigationState />
      </View>
    );
  }
}

RootContainer.propTypes = {
  terms: PropTypes.bool.isRequired,
};

function mapStateToProps({ modals: { terms } }) {
  return { terms };
}

export default connect(mapStateToProps)(RootContainer);
