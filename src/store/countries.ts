import {createCollectionFromArray} from '../helpers';
// import createAction from '../helpers/actionHelper';
import { changeHomeAction } from './home';
import {
  ENDPOINT,
  ERROR_MESSAGE
} from '../constants';
import {ActionCountries, Country} from '../interfaces';

export const initialState = {};

export const SET_COUNTRIES = 'SET_COUNTRIES';
export const setCountries = (countries: Country[]) => ({
  type: SET_COUNTRIES,
  payload: countries
});

export default function reducer(state = initialState, action: ActionCountries) {
  const {type} = action;
  switch (type) {
    case SET_COUNTRIES:
      const {payload} = action;
      return {
        ...state,
        ...createCollectionFromArray(payload)
      }
    default:
      return state;
  }
};

const onError = (dispatch: any, message: string) => {
  dispatch(changeHomeAction({ name: "isLoading", value: false }));
  dispatch(changeHomeAction({ name: "error", value: message }));
};

const hideLoaderAndClearError = (dispatch: any) => {
  dispatch(changeHomeAction({ name: "isLoading", value: false }));
  dispatch(changeHomeAction({ name: "error", value: '' }));
};

export const fetchCountries = () => {
  return (dispatch: any) => {
    hideLoaderAndClearError(dispatch);
    fetch(ENDPOINT)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(ERROR_MESSAGE);
      }
    })
    .then((response: Country[]) => {
      hideLoaderAndClearError(dispatch);
      dispatch(setCountries(response));
    })
    .catch(error => onError(dispatch, error));
  };
};
