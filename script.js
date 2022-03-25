import {formPrice, formCount, formDiscount,
  formModalCheckBox, formMainModal} from './modules/form.js';
import {delActive} from './modules/homePage.js';

const init = () => {
  const price = formPrice;
  const count = formCount;
  const discount = formDiscount;
  const checkBox = formModalCheckBox;
  const modal = formMainModal;
  const delActiveClass = delActive;

  return {
    price,
    count,
    discount,
    checkBox,
    modal,
    delActiveClass,
  };
};
