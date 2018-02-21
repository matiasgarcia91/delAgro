import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator, DrawerNavigator } from 'react-navigation';

import Login from '../containers/LoginScreen';
import Register from '../containers/RegisterScreen';
import Home from '../containers/HomeScreenContainer';
import Details from '../components/DetailsScreen';
import Camera from '../components/CameraScreen';
import { addListener } from '../utils/redux';

const homeStack = StackNavigator({
  Home: { screen: Home },
  Details: { screen: Details },
}, { headerMode: 'none' });

export const AppNavigator = StackNavigator({
  loggedOutFlow: {
    screen: DrawerNavigator({
      Home: { screen: homeStack },
      Camera: { screen: Camera },
      Login: { screen: Login },
      Register: { screen: Register },
    }, { headerMode: 'none' }),
  },
  loggedInFlow: {
    screen: DrawerNavigator({
      Home: { screen: Home },
      Camera: { screen: Camera },
    }, { headerMode: 'none' }),
  },
}, { initialRouteName: 'loggedOutFlow', headerMode: 'none' });

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
