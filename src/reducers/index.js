import { combineReducers } from 'redux';

import navigationReducer from './rootNavigatorReducer';
import drawerNavReducer from './drawerNavReducer';
import homeScreenReducer from './homeScreenReducer';

const rootReducer = combineReducers({
  nav: navigationReducer,
  homeNav: drawerNavReducer,
  homeScreen: homeScreenReducer,
});

export default rootReducer;
