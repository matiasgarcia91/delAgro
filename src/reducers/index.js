import { combineReducers } from 'redux';

import navigationReducer from './rootNavigatorReducer';
import homeScreenReducer from './homeScreenReducer';
import loginReducer from './login';

const rootReducer = combineReducers({
  nav: navigationReducer,
  homeScreen: homeScreenReducer,
  session: loginReducer,
});

export default rootReducer;
