import { store } from '../containers/App';

const initialState = {
  terms: false,
  upload: false,
};

export const SHOW_TERMS = 'modals/SHOW_TERMS';
export const HIDE_UPLOAD = 'modals/HIDE_UPLOAD';
export const SHOW_UPLOAD = 'modals/SHOW_UPLOAD';
export const HIDE_TERMS = 'modals/HIDE_TERMS';


export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_TERMS:
      return { ...state, terms: true };
    case HIDE_TERMS:
      return { ...state, terms: false };
    case SHOW_UPLOAD:
      return { ...state, upload: true };
    case HIDE_UPLOAD:
      return { ...state, upload: false };
    default:
      return state;
  }
}

export function showTermsModal() {
  store.dispatch({ type: SHOW_TERMS });
}

export function hideTermsModal() {
  store.dispatch({ type: HIDE_TERMS });
}

export function showUploadModal() {
  store.dispatch({ type: SHOW_UPLOAD });
}

export function hideUploadModal() {
  store.dispatch({ type: HIDE_UPLOAD });
}
