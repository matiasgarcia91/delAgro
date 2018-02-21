import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as ReactNavigation from 'react-navigation';
import { connect } from 'react-redux';
import { BackHandler } from 'react-native';

import AppWithNavigationState from './AppNavigator';

// here is our redux-aware our smart component
class ReduxNavigation extends Component {
  componentDidMount() {
    BackHandler.addEventListener('backPress', () => {
      const { dispatch, nav } = this.props;
      if (this.shouldCloseApp(nav)) return false;
      dispatch({
        type: 'Navigation/BACK',
      });
      return true;
    });
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('backPress');
  }

  shouldCloseApp(nav) {
    return nav.index === 0;
  }

  render() {
    const { dispatch, nav } = this.props;
    const navigation = ReactNavigation.addNavigationHelpers({
      dispatch,
      state: nav,
    });
    return <AppWithNavigationState navigation={navigation} />;
  }
}

ReduxNavigation.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.shape().isRequired,
};

const mapStateToProps = ({ nav }) => ({ nav });
export default connect(mapStateToProps)(ReduxNavigation);
