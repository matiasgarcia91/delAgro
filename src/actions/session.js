import { navigateToHome, navigateToLogin, navigateToRegister } from '../reducers/rootNavigatorReducer';

export const LOGIN_PENDING = 'LOGIN_PENDING';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export function loginPending() {
  return { type: LOGIN_PENDING };
}

export function loginSuccess({ username }) {
  return { type: LOGIN_SUCCESS, username };
}

export function loginFailure(error) {
  return { type: LOGIN_SUCCESS, error };
}

// Thunk actions

export function login() {
  return (dispatch) => {
    dispatch(loginPending());

    // Login Api call, fake success for now
    dispatch(loginSuccess({ username: 'elMati' }));
    dispatch(navigateToHome());
  };
}

export function toLogin() {
  return (dispatch) => {
    dispatch(navigateToLogin());
  };
}

export function toRegister() {
  return (dispatch) => {
    dispatch(navigateToRegister());
  };
}
