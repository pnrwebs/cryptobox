import {CUR_SYMB} from '../config/Constants';
export const ucword = str => {
  return str.toLowerCase().replace(/\b[a-z]/g, letter => letter.toUpperCase());
};

export const acronym = str => {
  return str.match(/\b\w/g).join('').toUpperCase();
};

export const currency = value => {
  return CUR_SYMB + value.toFixed(4).replace(/\d(?=(\d{3})+\.)/g, '$&,');
};

export const ucfirst = string =>
  string.charAt(0).toUpperCase() + string.slice(1);
