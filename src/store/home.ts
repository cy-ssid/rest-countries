import createAction from '../helpers/actionHelper';
import {AppAction} from '../interfaces';

export const initialState = {
  isLoading: false,
  error: '',
  region: '',
  search: '',
  isDark: false,
}

export const CHANGE_HOME = 'CHANGE_HOME';
export const changeHomeAction = createAction(CHANGE_HOME);

export default function reducer(state = initialState, action: AppAction) {
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

export const getLoading = (state: typeof initialState) => state.isLoading;
export const getError = (state: typeof initialState) => state.error;
export const getRegion = (state: typeof initialState) => state.region;
export const getSearch = (state: typeof initialState) => state.search;
export const getTheme = (state: typeof initialState) => state.isDark;

