import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import Login from '../containers/LoginScreen';
import Register from '../containers/RegisterScreen';
import DrawerRootContainer from '../containers/DrawerRootContainer';
import { addListener } from '../utils/redux';

export const AppNavigator = StackNavigator(
  {
    Login: { screen: Login },
    Register: { screen: Register },
    App: { screen: DrawerRootContainer },
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
  },
);

class AppWithNavigationState extends Component {
  render() {
    const { dispatch, nav } = this.props;
    return (
      <AppNavigator
        navigation={addNavigationHelpers({
          dispatch,
          state: nav,
          addListener,
        })}
      />
    );
  }
}

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.shape().isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
