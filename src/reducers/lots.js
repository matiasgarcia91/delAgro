import axios from 'axios';
import { AsyncStorage } from 'react-native';

import axiosCustom from '../utils/axios';
import { navigateToHome } from '../reducers/rootNavigatorReducer';

const initialState = {
  allLots: [],
  categories: null,
  breeds: null,
  selected: null,
};

export const IS_FETCHING = 'IS_FETCHING';
export const ALL_LOTS_SUCCESS = 'ALL_LOTS_SUCCESS';
export const ALL_LOTS_FAILURE = 'ALL_LOTS_FAILURE';
export const BREEDS_SUCCESS = 'BREEDS_SUCCESS';
export const CATEGORIES_SUCCESS = 'CATEGORIES_SUCCESS';
export const SET_ERROR = 'SET_ERROR';
export const SELECT_LOT = 'SELECT_LOT';

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ALL_LOTS_SUCCESS:
      return {
        ...state,
        allLots: action.lots,
        isFetching: false,
      };
    case ALL_LOTS_FAILURE:
      return { ...state, token: null, loggedIn: false, error: action.error };
    case CATEGORIES_SUCCESS:
      return { ...state, categories: action.categories };
    case BREEDS_SUCCESS:
      return { ...state, breeds: action.breeds };
    case SET_ERROR:
      return { ...state, error: action.error };
    case SELECT_LOT:
      return { ...state, selected: action.lot };
    default:
      return state;
  }
}

export function fetching() {
  return { type: IS_FETCHING };
}

export function allLotsSuccess(lots) {
  return { type: ALL_LOTS_SUCCESS, lots };
}

export function breedsSuccess(breeds) {
  return { type: BREEDS_SUCCESS, breeds };
}

export function categoriesSuccess(categories) {
  return { type: CATEGORIES_SUCCESS, categories };
}

export function setError({ error }) {
  return { type: SET_ERROR, error };
}

export function selectLot(lot) {
  return { type: SELECT_LOT, lot };
}

export function fetchAllLots() {
  return (dispatch) => {
    dispatch(fetching());
    return axiosCustom.get('/lots')
      .then((response) => {
        dispatch(allLotsSuccess(response.data));
      })
      .catch(error => dispatch(setError({ error })));
  };
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

export function fetchCategories() {
  return dispatch => (
    axiosCustom.get('/categories')
      .then((response) => {
        dispatch(categoriesSuccess(response.data));
      })
      .catch(error => dispatch(setError({ error })))
  );
}

export function getStaticData() {
  return (dispatch) => {
    dispatch(fetching());
    dispatch(fetchBreeds(dispatch));
    dispatch(fetchCategories(dispatch));
  };
}

function buildVideoForm(video) {
  const data = new FormData();
  data.append('file', {
    uri: video,
    name: 'video',
  });
  return data;
}

export function submitLot({
  category_id,
  breed_id,
  quantity,
  price,
  video: videoUrl,
  weight,
  description,
}) {
  return (dispatch, getState) => {
    const { token, uid, client } = getState().session.creds;
    const headers = {
      'access-token': token,
      'client': client,
      'uid': uid,
      'Content-Type': 'multipart/form-data',
    };
    const axiosInstance = axios.create({
      baseURL: 'http://delagro-api.herokuapp.com/api/v1/',
      headers,
    });
    const data = new FormData();
    data.append('category_id', category_id);
    data.append('breed_id', breed_id);
    data.append('state', 'artigas');
    data.append('quantity', quantity);
    data.append('price', price);
    data.append('weight', weight);
    data.append('description', description);
    data.append('video', {
      uri: videoUrl,
      type: 'video/mov',
    });
    return fetch('http://delagro-api.herokuapp.com/api/v1/lots', {
      method: 'post',
      headers,
      body: data,
    }).then(() => dispatch(navigateToHome()))
      .catch(error => console.log(error));
  };
}
