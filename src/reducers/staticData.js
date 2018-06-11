// import { AsyncStorage } from 'react-native';

import axiosCustom from '../utils/axios';
import { addPriceUnit } from '../helpers/priceUnit';

const initialState = {
  categories: null,
  breeds: null,
  states: null,
  contacts: null,
};

export const BREEDS_SUCCESS = 'BREEDS_SUCCESS';
export const STATES_SUCCESS = 'STATES_SUCCESS';
export const CATEGORIES_SUCCESS = 'CATEGORIES_SUCCESS';
export const SET_ERROR = 'static/SET_ERROR';
export const SET_CONTACTS = 'SET_CONTACTS';

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CATEGORIES_SUCCESS:
      return { ...state, categories: action.categories };
    case STATES_SUCCESS:
      return { ...state, states: action.states };
    case BREEDS_SUCCESS:
      return { ...state, breeds: action.breeds };
    case SET_CONTACTS:
      return { ...state, contacts: action.contacts };
    case SET_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
}

export function setError({ error }) {
  return { type: SET_ERROR, error };
}

export function breedsSuccess(breeds) {
  return { type: BREEDS_SUCCESS, breeds };
}

export function statesSuccess(states) {
  return { type: STATES_SUCCESS, states };
}

export function categoriesSuccess(categories) {
  const categoriesWithUnit = addPriceUnit(categories);
  return { type: CATEGORIES_SUCCESS, categories: categoriesWithUnit };
}

export function setContacts(contacts) {
  return { type: SET_CONTACTS, contacts };
}

export function fetchBreeds() {
  return dispatch => (
    axiosCustom.get('/breeds')
      .then((response) => {
        dispatch(breedsSuccess(response.data));
      })
      .catch(error => dispatch(setError({ error })))
  );
}

export function fetchStates() {
  return dispatch => (
    axiosCustom.get('/states')
      .then((response) => {
        dispatch(statesSuccess(response.data.states));
      })
      .catch(error => dispatch(setError({ error })))
  );
}

export function fetchCategories() {
  return dispatch => (
    axiosCustom.get('/categories')
      .then((response) => {
        dispatch(categoriesSuccess(response.data));
      })
      .catch(error => dispatch(setError({ error })))
  );
}

export function fetchContacts() {
  return dispatch => (
    axiosCustom.get('/contacts')
      .then((response) => {
        dispatch(setContacts(response.data));
      })
      .catch(error => dispatch(setError({ error })))
  );
}

export function getStaticData() {
  return (dispatch, getState) => {
    const { breeds, states, categories, contacts } = getState().staticData;
    if (!breeds) dispatch(fetchBreeds(dispatch));
    if (!states) dispatch(fetchStates(dispatch));
    if (!categories) dispatch(fetchCategories(dispatch));
    if (!contacts) dispatch(fetchContacts(dispatch));
  };
}
