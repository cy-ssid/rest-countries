import {
  Country
} from '../interfaces';

export function createCollectionFromArray(arr :Country[]) {
  const collection = {};

  //TODO: Check again if we can improve on type for a
  arr.reduce((a :any, e :Country) => {
    a[e.alpha3Code] = e;
    return a;
  }, collection);
  return collection;
}

export function numberWithCommas(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
