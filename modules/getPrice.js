/* eslint-disable max-len */
import {form} from './getElements.js';

export const getTotalPriceMain = (data) => {
  const total = data.map(data => (data.count * data.price) -
  (data.price * data.count * data.discount_count / 100)).reduce(((a, b) => a + b), 0);
  return total;
};

export const getModalPrice = () => (form.price.value * form.count.value) -
   (form.price.value * form.count.value * form.discount_count.value / 100);

