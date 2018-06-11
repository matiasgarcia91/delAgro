import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import navigationReducer from './rootNavigatorReducer';
import homeScreenReducer from './homeScreenReducer';
import loginReducer from './login';
import lotsReducer from './lots';
import staticDataReducer from './staticData';
import filtersReducer from './filters';
import modals from './modals';


const persistConfig = {
  key: 'root',
  storage,
};

const persistedSession = persistReducer(persistConfig, loginReducer);

const rootReducer = combineReducers({
  nav: navigationReducer,
  homeScreen: homeScreenReducer,
  session: persistedSession,
  lots: lotsReducer,
  staticData: staticDataReducer,
  form: formReducer,
  filters: filtersReducer,
  modals,
});

export default rootReducer;
