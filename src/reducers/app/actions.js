import * as types from './actionTypes';

export function appInitialized() {
  const login = { app: 'login' }
  return async function (dispatch, getState) {
    dispatch(changeAppRoot(login, types.SCREEN_LOGIN));
  };
}

export function changeAppRoot(root, type) {
  return { type: type, root: root };
}

export function login(isGuest) {
  const login = { app: 'after-login', isGuest: isGuest }
  return async function (dispatch, getState) {
    dispatch(changeAppRoot(login, types.SCREEN_MAIN));
  };
}

export function ChangeUser(value) {
  return {type: types.CHANGE_USER, param:value};
}
