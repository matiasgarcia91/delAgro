import { CHANGE_VISIBLE_ITEMS } from '../actions/homeScreen';

const initialState = {
  visibleItems: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_VISIBLE_ITEMS:
      return { ...state, visibleItems: action.visibleItems };
    default:
      return state;
  }
}
