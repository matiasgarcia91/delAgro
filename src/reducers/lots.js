import { Platform } from 'react-native';
import RNFetchBlob from 'react-native-fetch-blob';

import axiosCustom from '../utils/axios';
import loggedAxios from '../utils/loggedAxios';
import { navigateToHomeLoggedIn } from '../reducers/rootNavigatorReducer';

const initialState = {
  allLots: [],
  selected: null,
  myLots: [],
  uploading: false,
  listEnd: false,
  isFetching: false,
  refreshing: false,
};

export const IS_FETCHING = 'IS_FETCHING';
export const ALL_LOTS_SUCCESS = 'ALL_LOTS_SUCCESS';
export const ALL_LOTS_FAILURE = 'ALL_LOTS_FAILURE';
export const SET_ERROR = 'SET_ERROR';
export const SELECT_LOT = 'SELECT_LOT';
export const UPLOAD_PENDING = 'UPLOAD_PENDING';
export const UPLOAD_SUCCESS = 'UPLOAD_SUCCESS';
export const UPLOAD_FAILURE = 'UPLOAD_FAILURE';
export const MY_LOTS_SUCCESS = 'MY_LOTS_SUCCESS';
export const APPEND_LOTS = 'APPEND_LOTS';
export const LIST_END = 'LIST_END';
export const REFRESH = 'REFRESH';

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ALL_LOTS_SUCCESS:
      return {
        ...state,
        allLots: action.lots,
        isFetching: false,
        listEnd: false,
        refreshing: false,
      };
    case APPEND_LOTS:
      return { ...state, allLots: [...state.allLots, ...action.lots], isFetching: false };
    case ALL_LOTS_FAILURE:
      return { ...state, token: null, loggedIn: false, error: action.error };
    case SET_ERROR:
      return { ...state, error: action.error };
    case SELECT_LOT:
      return { ...state, selected: action.lot };
    case UPLOAD_PENDING:
      return { ...state, uploading: true };
    case UPLOAD_SUCCESS:
      return { ...state, uploading: false };
    case UPLOAD_FAILURE:
      return { ...state, uploading: false, uploadFailure: true, uploadError: action.uploadError };
    case MY_LOTS_SUCCESS:
      return { ...state, myLots: action.myLots, isFetching: false };
    case IS_FETCHING:
      return { ...state, isFetching: true };
    case LIST_END:
      return { ...state, listEnd: true };
    case REFRESH:
      return { ...state, refreshing: true };
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

export function appendLots(lots) {
  return { type: APPEND_LOTS, lots };
}

export function listEnd() {
  return { type: LIST_END };
}

export function setError({ error }) {
  return { type: SET_ERROR, error };
}

export function selectLot(lot) {
  return { type: SELECT_LOT, lot };
}

export function uploadSuccess() {
  return { type: UPLOAD_SUCCESS };
}

export function uploadPending() {
  return { type: UPLOAD_PENDING };
}

export function uploadFailure(error) {
  return { type: UPLOAD_SUCCESS, uploadError: error };
}

export function myLotsSuccess(myLots) {
  return { type: MY_LOTS_SUCCESS, myLots };
}

function refreshing() {
  return { type: REFRESH };
}

export function fetchAllLots(page = 1) {
  return (dispatch) => {
    dispatch(fetching());
    const queryString = `scope[status]=active&page=${page}`;
    return axiosCustom.get(`/lots?${queryString}`)
      .then(({ data }) => {
        if (data.length === 0) return dispatch(listEnd());
        if (page > 1) return dispatch(appendLots(data));
        return dispatch(allLotsSuccess(data));
      })
      .catch(error => dispatch(setError({ error })));
  };
}

export function refreshLots() {
  return (dispatch) => {
    dispatch(refreshing());
    dispatch(fetchAllLots(1));
  };
}

export function fetchMyLots() {
  return (dispatch, getState) => {
    dispatch(fetching());
    const { token, client, uid } = getState().session.creds;
    return loggedAxios({ token, client, uid }).get('/my_lots')
      .then((response) => {
        dispatch(myLotsSuccess(response.data));
      })
      .catch(error => dispatch(setError({ error })));
  };
}

export function submitLot({
  category_id,
  breed_id,
  state,
  quantity,
  price,
  video: videoUrl,
  weight,
  description: rawDescr,
}) {
  return (dispatch, getState) => {
    const { token, uid, client } = getState().session.creds;
    const headers = {
      'access-token': token,
      'client': client, // eslint-disable-line
      'uid': uid, // eslint-disable-line
      'Content-Type': 'multipart/form-data',
    };
    const description = rawDescr || ' ';
    dispatch(uploadPending());
    const cutVideo = videoUrl ? videoUrl.replace('file://', '').slice(1) : '';
    RNFetchBlob.fetch('POST', 'http://delagro-api.herokuapp.com/api/v1/lots', headers, [
      { name: 'video', data: RNFetchBlob.wrap(cutVideo), type: 'video/mp4', filename: 'avatar-png.png' },
      { name: 'breed_id', data: breed_id.toString() },
      { name: 'quantity', data: quantity.toString() },
      { name: 'price', data: price.toString() },
      { name: 'weight', data: weight.toString() },
      { name: 'state', data: state },
      { name: 'category_id', data: category_id.toString() },
      { name: 'description', data: description },
    ])
      .then(() => dispatch(uploadSuccess()))
      .catch(error => uploadFailure(error));
    return dispatch(navigateToHomeLoggedIn());
  };
}

/*
export const FAVORITES_SUCCESS = 'FAVORITES_SUCCESS';

case FAVORITES_SUCCESS:
  return { ...state, favorites: action.favorites };

export function favoritesSuccess(favorites) {
  return { type: FAVORITES_SUCCESS, favorites };
}

export function fetchFavorites() {
  return (dispatch, getState) => {
    dispatch(fetching());
    const { token, client, uid } = getState().session;
    return loggedAxios({ token, client, uid }).get('/favorites')
      .then((response) => {
        dispatch(favoritesSuccess(response.data));
      })
      .catch(error => dispatch(setError({ error })));
  };
}


export function setFavorite({ lotId }) {
  return (dispatch, getState) => {
    const { token, client, uid } = getState().session;
    return loggedAxios({ token, client, uid }).post('/favorites', { lot_id: lotId })
      .then((response) => {
        console.log(response);
      })
      .catch(error => dispatch(setError({ error })));
  };
}
*/
