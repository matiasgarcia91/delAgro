import { createReactNavigationReduxMiddleware, createReduxBoundAddListener } from 'react-navigation-redux-helpers';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const navMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav,
);

/* ------------- Redux Configuration ------------- */
const middleware = [thunk, navMiddleware];
const enhancers = [window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()];

/* ------------- Assemble Middleware ------------- */
enhancers.push(applyMiddleware(...middleware));

const addListener = createReduxBoundAddListener('root');

export {
  enhancers,
  addListener,
};
