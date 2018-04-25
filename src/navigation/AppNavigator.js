import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator, DrawerNavigator, DrawerItems } from 'react-navigation';

import Login from '../containers/LoginScreen';
import Register from '../containers/RegisterScreen';
import Home from '../containers/HomeScreenContainer';
import Details from '../containers/DetailsScreenContainer';
import Camera from '../components/CameraScreen';
import Publish from '../containers/PublishScreenContainer';
import { addListener } from '../utils/redux';
import { logout } from '../reducers/login';

const CustomDrawerContentComponent = (props) => {
  const nav = props.nav; // eslint-disable-line

  return (
    <View style={{ marginTop: 25 }}>
      <ScrollView>
        <DrawerItems
          {...props}
          onItemPress={
            ({ route, focused }) => {
              if (route.key === 'LogOut') return logout();
              return props.onItemPress({ route, focused }) // eslint-disable-line
            }
          }
        />
      </ScrollView>
    </View>
  );
};

// Si se rompe algo probar hacer navs separados para los stacks de logged in/out;
const homeStack = StackNavigator({
  Home: { screen: Home },
  Details: { screen: Details },
  Publish: { screen: Publish },
  Camera: { screen: Camera },
}, { headerMode: 'none' });

export const AppNavigator = StackNavigator({
  loggedOutFlow: {
    screen: DrawerNavigator({
      HomeLoggedOut: { screen: homeStack, navigationOptions: { drawerLabel: 'Inicio' } },
      Login: { screen: Login, navigationOptions: { drawerLabel: 'Iniciar sesion' } },
      Register: { screen: Register, navigationOptions: { drawerLabel: 'Registrarse' } },
    }, { headerMode: 'none', drawerWidth: 200 }),
  },
  loggedInFlow: {
    screen: DrawerNavigator({
      HomeLoggedIn: { screen: homeStack, navigationOptions: { drawerLabel: 'Inicio' } },
      LogOut: { screen: () => {}, navigationOptions: { drawerLabel: 'Cerrar sesion' } },
    }, { headerMode: 'none', drawerWidth: 200, contentComponent: CustomDrawerContentComponent }),
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
