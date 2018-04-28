import { combineReducers } from 'redux';

import navigationReducer from './rootNavigatorReducer';
import homeScreenReducer from './homeScreenReducer';
import loginReducer from './login';
import lotsReducer from './lots';
import staticDataReducer from './staticData';

const rootReducer = combineReducers({
  nav: navigationReducer,
  homeScreen: homeScreenReducer,
  session: loginReducer,
  lots: lotsReducer,
  staticData: staticDataReducer,
});

export default rootReducer;
