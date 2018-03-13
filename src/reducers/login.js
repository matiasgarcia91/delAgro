import axios from '../utils/axios';
import { navigateToHome, navigateToLogin, navigateToRegister } from '../reducers/rootNavigatorReducer';

const initialState = {
  loggedIn: false,
  token: null,
};

export const LOGIN_PENDING = 'LOGIN_PENDING';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, token: action.token, loggedIn: true, username: action.username };
    case LOGIN_FAILURE:
      return { ...state, token: null, loggedIn: false, error: action.error };
    default:
      return state;
  }
}

export function loginPending() {
  return { type: LOGIN_PENDING };
}

export function loginSuccess({ username, token }) {
  return { type: LOGIN_SUCCESS, username, token };
}

export function loginFailure(error) {
  return { type: LOGIN_FAILURE, error };
}

// Thunk actions

export function login({ email, password }) {
  return (dispatch) => {
    dispatch(loginPending());
    return axios.post('/auth/sign_in', { email, password })
      .then((response) => {
        console.log(response);
        const { data: { data: { first_name } } } = response;
        dispatch(loginSuccess({ username: first_name, token: '123' }));
        dispatch(navigateToHome());
      })
      .catch(e => dispatch(loginFailure(e)));
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
