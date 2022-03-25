/* eslint-disable max-len */
import {form, modalTotalPrice, modalCheckBox, discountCount, mainModal, tableBody, headerTotalPrice} from './getElements.js';
import {getModalPrice, getTotalPriceMain} from './getPrice.js';
import {uniqId} from './getRandom.js';
import {data} from './data.js';
import {addNewProd, createRow} from './createRow.js';

const formPrice = form.price.addEventListener('blur', () => modalTotalPrice.innerHTML = getModalPrice());
const formCount = form.count.addEventListener('blur', () => modalTotalPrice.innerHTML = getModalPrice());
const formDiscount = form.discount_count.addEventListener('blur', () => modalTotalPrice.innerHTML = getModalPrice());

// чекбокс

const formModalCheckBox = modalCheckBox.addEventListener('click', () => {
  discountCount.toggleAttribute('disabled');
  if (discountCount.hasAttribute('disabled')) {
    form.discount_count.value = '';
  }
});

// закрытие модального окна

const formMainModal = mainModal.addEventListener('click', e => {
  const target = e.target;
  if (target.closest('.modal__close') || (!target.closest('.modal'))) {
    mainModal.classList.remove('active');
  }
});

const formSubmit = form.addEventListener('submit', e => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const newProd = Object.fromEntries(formData);
  newProd.id = uniqId;

  addNewProd(newProd);
  tableBody.append(createRow(newProd));
  mainModal.classList.remove('active');
  form.reset();
  headerTotalPrice.innerHTML = getTotalPriceMain(data);
});

export {
  formPrice,
  formCount,
  formDiscount,
  formModalCheckBox,
  formMainModal,
  formSubmit,
};
