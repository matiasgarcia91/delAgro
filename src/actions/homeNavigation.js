import { navigateToHome, navigateToCamera } from '../reducers/drawerNavReducer';

export function toHome() {
  return (dispatch) => {
    dispatch(navigateToHome());
  };
}

export function toCamera() {
  return (dispatch) => {
    dispatch(navigateToCamera());
  };
}
