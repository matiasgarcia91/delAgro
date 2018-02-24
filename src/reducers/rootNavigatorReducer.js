import { NavigationActions } from 'react-navigation';

import { AppNavigator } from '../navigation/AppNavigator';

const { BACK, navigate, back } = NavigationActions;

// Action Types

const NAV_HOME = 'NAV_HOME';
const NAV_LOGIN = 'NAV_LOGIN';
const NAV_REGISTER = 'NAV_REGISTER';

// Reducer

const initialState = AppNavigator.router.getStateForAction(
  NavigationActions.init(),
);

export default function reducer(state = initialState, action) {
  const newState = AppNavigator.router.getStateForAction(action, state);
  switch (action.type) {
    case BACK:
      return AppNavigator.router.getStateForAction(back(), state);
    case NAV_HOME:
      return AppNavigator.router.getStateForAction(
        navigate({ routeName: 'App' }),
      );
    case NAV_LOGIN:
      return AppNavigator.router.getStateForAction(
        navigate({ routeName: 'Login' }),
      );
    case NAV_REGISTER:
      return AppNavigator.router.getStateForAction(
        navigate({ routeName: 'Register' }),
      );
    default:
      return newState || state;
  }
}

// Action Creators

export function navigateToHome() {
  return { type: NAV_HOME };
}

export function navigateToLogin() {
  return { type: NAV_LOGIN };
}

export function navigateToRegister() {
  return { type: NAV_REGISTER };
}
