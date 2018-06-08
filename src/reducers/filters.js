import axiosCustom from '../utils/axios';

const initialState = {
  filteredLots: null,
};

export const LOTS_SUCCESS = 'filters/LOTS_SUCCESS';
export const SET_FILTERS = 'filters/SET_FILTERS';
export const SET_ERROR = 'filters/SET_ERROR';

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOTS_SUCCESS:
      return { ...state, filteredLots: action.filteredLots };
    case SET_FILTERS:
      return { ...state, filters: action.filters };
    case SET_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
}

export function setError({ error }) {
  return { type: SET_ERROR, error };
}

export function setFilters(filters) {
  return { type: SET_FILTERS, filters };
}

export function setFilteredLots(filteredLots) {
  return { type: LOTS_SUCCESS, filteredLots };
}

// /lots?scope[weight]=295&scope[status]=pending&scope[state]=montevideo&scope[category]=9
export function fetchFilteredLots({ categoryId, breedId, stateId, weightMin, weightMax }) {
  let queryString = '';
  if (categoryId) queryString = `scope[category]=${categoryId}&`;
  if (breedId) queryString = `${queryString}scope[breed]=${breedId}&`;
  if (stateId) queryString = `${queryString}scope[state]=${stateId}&`;
  if (weightMin) queryString = `${queryString}scope[weight_min]=${weightMin}&`;
  if (weightMax) queryString = `${queryString}scope[weight_max]=${weightMax}`;
  return dispatch => (
    axiosCustom.get(`/lots?${queryString}`)
      .then((response) => {
        dispatch(setFilteredLots(response.data));
      })
      .catch(error => dispatch(setError({ error })))
  );
}
