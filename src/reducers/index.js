import { combineReducers } from 'redux';

import navigationReducer from './rootNavigatorReducer';
import homeScreenReducer from './homeScreenReducer';
import loginReducer from './login';
import lotsReducer from './lots';

const rootReducer = combineReducers({
  nav: navigationReducer,
  homeScreen: homeScreenReducer,
  session: loginReducer,
  lots: lotsReducer,
});

export default rootReducer;
