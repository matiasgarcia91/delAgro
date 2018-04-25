import { AsyncStorage } from 'react-native';
import axios from 'axios';

import { store } from '../containers/App';
import { navigateToHomeLoggedIn, navigateToHomeLoggedOut, navigateToLogin, navigateToRegister } from '../reducers/rootNavigatorReducer';

const axiosInstance = axios.create({
  baseURL: 'http://delagro-api.herokuapp.com/api/v1/',
});

const initialState = {
  loggedIn: false,
  token: null,
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
  store.dispatch(navigateToHomeLoggedOut());
  return store.dispatch({ type: LOGOUT });
}

// Thunk actions

export function login({ email, password }) {
  return (dispatch) => {
    dispatch(loginPending());
    return axiosInstance.post('/auth/sign_in', { email, password })
      .then((response) => {
        const { data: { data: { first_name, email: uid } } } = response;
        const token = response.headers['access-token'];
        const client = response.headers.client;
        AsyncStorage.setItem('delAgro:token', token)
          .then(() => {
            AsyncStorage.setItem('delAgro:client', client)
              .then(() => {
                AsyncStorage.setItem('delAgro:uid', uid)
                  .then(() => {
                    dispatch(loginSuccess({ username: first_name, token, uid, client }));
                    dispatch(saveCredentials({ token, uid, client }));
                    dispatch(navigateToHomeLoggedIn());
                  });
              });
          });
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
        AsyncStorage.setItem('delAgro:token', token);
        AsyncStorage.setItem('delAgro:client', client);
        AsyncStorage.setItem('delAgro:uid', uid);
        dispatch(loginSuccess({ username: first_name, token, uid, client }));
        dispatch(navigateToHomeLoggedIn()); // TODO: aca a donde vamos?
      })
      .catch(e => console.log(e));
  };
}
