import createAction from '../helpers/actionHelper';
import {
  AppAction,
  RootState
} from '../interfaces';

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

export const getLoading = (state: RootState) => state.home.isLoading;
export const getError = (state: RootState) => state.home.error;
export const getRegion = (state: RootState) => state.home.region;
export const getSearch = (state: RootState) => state.home.search;
export const getTheme = (state: RootState) => state.home.isDark;

