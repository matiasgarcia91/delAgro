import { combineReducers } from 'redux';

import navigationReducer from './rootNavigatorReducer';
import homeScreenReducer from './homeScreenReducer';

const rootReducer = combineReducers({
  nav: navigationReducer,
  homeScreen: homeScreenReducer,
});

export default rootReducer;
