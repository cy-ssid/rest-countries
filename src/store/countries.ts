import {createCollectionFromArray} from '../helpers';
import createAction from '../helpers/actionHelper';
import { changeHomeAction } from './home';
import {
  ENDPOINT,
  ERROR_MESSAGE
} from '../constants';
import {Action} from '../interfaces';

export const initialState = {};

export const SET_COUNTRIES = 'SET_COUNTRIES';
export const setCountries = createAction(SET_COUNTRIES);

export default function reducer(state = initialState, action: Action) {
  const {type, payload} = action;
  const {name, value} = payload;
  switch (type) {
    case SET_COUNTRIES:
      return {
        ...state,
        ...createCollectionFromArray(value)
      }
    default:
      return state;
  }
};

const onError = (dispatch, message) => {
  dispatch(changeHomeAction({ name: "isLoading", value: false }));
  dispatch(changeHomeAction({ name: "error", value: message }));
};

const hideLoaderAndClearError = dispatch => {
  dispatch(changeHomeAction({ name: "isLoading", value: false }));
  dispatch(changeHomeAction({ name: "error", value: null }));
};

export const fetchCountries = () => {
  return (dispatch) => {
    hideLoaderAndClearError(dispatch);
    fetch(ENDPOINT)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(ERROR_MESSAGE);
      }
    })
    .then(response => {
      hideLoaderAndClearError(dispatch);
      dispatch(setCountries(response));
    })
    .catch(error => onError);
  };
};
