import numeral from 'numeral';
import 'numeral/locales';

export const formatPrice = price => {
  numeral.locale('pt-br');
  return numeral(price).format('$ 0,0.00');
};
