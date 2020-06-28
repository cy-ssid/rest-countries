import createAction from '../helpers/actionHelper';
import {Action} from '../interfaces';

export const initialState = {
  isLoading: false,
  error: '',
  region: '',
  search: '',
  isDark: false,
}

export const CHANGE_HOME = 'CHANGE_HOME';
export const changeHomeAction = createAction(CHANGE_HOME);

export default function reducer(state = initialState, action: Action) {
  const {type, payload} = action;
  switch (type) {
    case CHANGE_HOME:
      const {name, value} = payload;
      return {
        ...state,
        [name]: value,
      }
    default:
      return state;
  }
}

