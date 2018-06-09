import axios from 'axios';

import { store } from '../containers/App';
import { navigateToHomeLoggedIn, navigateToWelcomeScreen, navigateToLogin, navigateToRegister, navigateToCamera } from './rootNavigatorReducer';

const axiosInstance = axios.create({
  baseURL: 'http://delagro-api.herokuapp.com/api/v1/',
});

const initialState = {
  loggedIn: false,
  token: null,
  userData: {
    phone: '094821910',
    state: 'durazno',
  },
};

export const LOGIN_PENDING = 'LOGIN_PENDING';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';
export const SAVE_CREDENTIALS = 'SAVE_CREDENTIALS';

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.token,
        loggedIn: true,
        username: action.username,
        client: action.client,
        uid: action.uid,
      };
    case LOGIN_FAILURE:
      return { ...state, token: null, loggedIn: false, error: action.error };
    case SAVE_CREDENTIALS:
      return { ...state, creds: action.creds };
    case LOGOUT:
      return { ...initialState };
    default:
      return state;
  }
}

export function loginPending() {
  return { type: LOGIN_PENDING };
}

export function loginSuccess({ username, token, uid, client }) {
  return { type: LOGIN_SUCCESS, username, token, uid, client };
}

export function loginFailure(error) {
  return { type: LOGIN_FAILURE, error };
}

export function saveCredentials({ token, uid, client }) {
  return { type: SAVE_CREDENTIALS, creds: { token, uid, client } };
}

export function logout() {
  store.dispatch(navigateToWelcomeScreen());
  return store.dispatch({ type: LOGOUT });
}

// Thunk actions

export function login({ email, password, previous = null }) {
  return (dispatch) => {
    dispatch(loginPending());
    return axiosInstance.post('/auth/sign_in', { email, password })
      .then((response) => {
        const { data: { data: { first_name, email: uid } } } = response;
        const token = response.headers['access-token'];
        const client = response.headers.client;
        dispatch(loginSuccess({ username: first_name, token, uid, client }));
        dispatch(saveCredentials({ token, uid, client }));
        if (!previous) dispatch(navigateToHomeLoggedIn());
        if (previous === 'welcome') dispatch(navigateToCamera());
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

export function registerUser({ firstName, lastName, email, password, dob, cellphone, state }) {
  return (dispatch) => {
    dispatch(loginPending());
    return axiosInstance.post('/auth', {
      first_name: firstName,
      last_name: lastName,
      email,
      password,
      phone: cellphone,
      birthday: dob,
      state,
    })
      .then((response) => {
        const { data: { data: { first_name, email: uid } } } = response;
        const token = response.headers['access-token'];
        const client = response.headers.client;
        dispatch(loginSuccess({ username: first_name, token, uid, client }));
        dispatch(navigateToHomeLoggedIn());
      })
      .catch(e => console.log(e));
  };
}

export function updateUserData({ phone, state }) {
  return () => console.log({ phone, state });
}
