export const fields = [
  'name',
  'nativeName',
  'population',
  'region',
  'subregion',
  'capital',
  'topLevelDomain',
  'currencies',
  'languages',
  'borders',
  'alpha3Code',
  'flag'
];
export const ENDPOINT = `http://restcountries.eu/rest/v2/all?${fields.join(';')}`;
export const ERROR_MESSAGE = 'Something went wrong!!!';
