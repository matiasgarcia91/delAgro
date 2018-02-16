import { NavigationActions } from 'react-navigation';

import DrawerHomeNavigator from '../navigation/DrawerHomeNavigator';

const { BACK, navigate, back } = NavigationActions;

// Action Types

const NAV_HOME = 'NAV_HOME';
const NAV_CAMERA = 'NAV_CAMERA';


// Reducer

const initialState = DrawerHomeNavigator.router.getStateForAction(DrawerHomeNavigator.router.getActionForPathAndParams('Home'));

export default function reducer(state = initialState, action) {
  const newState = DrawerHomeNavigator.router.getStateForAction(action, state);
  switch (action.type) {
    case BACK:
      return DrawerHomeNavigator.router.getStateForAction(back(), state);
    case NAV_HOME:
      return DrawerHomeNavigator.router.getStateForAction(
        navigate({ routeName: 'Home' }),
      );
    case NAV_CAMERA:
      return DrawerHomeNavigator.router.getStateForAction(
        navigate({ routeName: 'Camera' }),
      );
    default:
      return newState || state;
  }
}

// Action Creators

export function navigateToHome() {
  return { type: NAV_HOME };
}

export function navigateToCamera() {
  return { type: NAV_CAMERA };
}
