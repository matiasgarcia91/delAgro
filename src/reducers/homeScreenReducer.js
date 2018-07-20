const initialState = {
  visibleItems: [],
};

export const CHANGE_VISIBLE_ITEMS = 'CHANGE_VISIBLE_ITEMS';
export const RESET_VISIBLE_ITEMS = 'RESET_VISIBLE_ITEMS';

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_VISIBLE_ITEMS:
      return { ...state, visibleItems: action.visibleItems };
    case RESET_VISIBLE_ITEMS:
      return { visibleItems: [] };
    default:
      return state;
  }
}

export const changeVisibleItemsChange = visibleItems => ({
  type: CHANGE_VISIBLE_ITEMS,
  visibleItems,
});

export const resetVisibleItems = () => ({
  type: RESET_VISIBLE_ITEMS,
});
