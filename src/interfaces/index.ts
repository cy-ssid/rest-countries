import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { rootReducer } from '../store'

export interface Payload {
  name: string,
  value: string | boolean | number
}

export interface ActionCountries {
  type: string,
  payload: Country[]
}

export interface AppAction {
  type: string,
  payload: Payload
}

export interface Currency {
    code: string,
    name: string,
    symbol: string
}

export interface Language {
    iso639_1: string,
    iso639_2: string,
    name: string,
    nativeName: string
}

export interface Country {
    alpha3Code: string,
    flat: string,
    currencies: Currency[],
    languages: Language[],
    name: string,
    topLevelDomain: string[],
    capital: string,
    region: string,
    subregion: string,
    population: number,
    borders: string[],
    nativeName: string,
}

export type RootState = ReturnType<typeof rootReducer>

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
