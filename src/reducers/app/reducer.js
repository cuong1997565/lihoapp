import * as types from './actionTypes';
import Immutable from 'seamless-immutable';
const initialState = Immutable({
  root: undefined // 'login' / 'after-login'
});

export function app(state = initialState, action = {}) {

  switch (action.type) {
    case types.SCREEN_LOGIN:
      return state.merge({
        root: action.root
      });
    case types.SCREEN_MAIN:
      return state.merge({
        root: action.root
      });
    default:
      return state;
  }
}

export function checkUserId(state = false, action = {}) {
  switch (action.type) {
    case types.CHANGE_USER:
      return ({
        data: action.param,
      });
    default:
      return state;
  }
}

