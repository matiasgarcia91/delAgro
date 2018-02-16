import { combineReducers } from 'redux';

import navigationReducer from './rootNavigatorReducer';
import drawerNavReducer from './drawerNavReducer';

const rootReducer = combineReducers({
  nav: navigationReducer,
  homeNav: drawerNavReducer,
});

export default rootReducer;
