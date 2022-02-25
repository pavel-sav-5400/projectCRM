/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
'use strict';

const data =
[
  
];

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const uniqId = getRandomIntInclusive(1e8, 9e8);


const mainModalTitle = document.querySelector('.modal__title');
const form = document.querySelector('.modal__form');
const modalCheckBox = document.querySelector('.modal__checkbox');
const modalCheckBoxDiscount = document.querySelector('.modal__input_discount');
const modalCheckBoxInput = document.querySelector('.modal__input');
const venderCodeId = document.querySelector('.vendor-code__id');
const discountCount = document.querySelector('.modal__input_discount')

const mainModal = document.querySelector('.overlay');
const tableBody = document.querySelector('.table__body');
const btnAddGood = document.querySelector('.panel__add-goods');

mainModal.classList.remove('active');

const addNewProd = prod => {
data.push(prod);
}

// кнопка добавить товар

btnAddGood.addEventListener('click', () => {
  mainModal.classList.add('active');
  venderCodeId.replaceWith(uniqId);
});

// закрытие модального окна

mainModal.addEventListener('click', e => {
  const target = e.target;
  if (target.closest('.modal__close') || (!target.closest('.modal'))) {
    mainModal.classList.remove('active');
  }
});
// удаление строки и объекта

tableBody.addEventListener('click', e => {
  const target = e.target;
  const itemId = target.closest('tr').dataset.id;

  if (target.closest('.table__btn_del')) {
    target.closest('tr').remove();
    data.filter(item => {
      if (+item.id === +itemId) {
        data.splice(data.indexOf(item), 1);
      }
    });
    console.log(data);
  }
},
);

// чекбокс

modalCheckBox.addEventListener('click', e => {
if (e.target.closest('.modal__checkbox')) {
  discountCount.toggleAttribute('disabled');
  if (discountCount.hasAttribute('disabled')) {
    e.target.reset();
  }
}
})

const createRow = data => tableBody.insertAdjacentHTML('afterbegin',
    `<tr data-id="${uniqId}">
    <td class="table__cell">${uniqId}</td>
    <td class="table__cell table__cell_left table__cell_name" >${data.name}</td>
    <td class="table__cell table__cell_left">${data.category}</td>
    <td class="table__cell">${data.units}</td>
    <td class="table__cell">${data.count}</td>
    <td class="table__cell">$${data.price}</td>
    <td class="table__cell">$${(data.count * data.price) - (data.price * data.count * data.discount / 100)}</td>
    <td class="table__cell table__cell_btn-wrapper">          
      <button class="table__btn table__btn_pic"></button>
      <button class="table__btn table__btn_edit"></button>
      <button class="table__btn table__btn_del"></button>
    </td>
  </tr> `,
);

const renderGoods = data => data.map(createRow);
renderGoods(data);

form.addEventListener('submit', e => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const newProd = Object.fromEntries(formData);
  console.log('newProd: ', newProd);
  addNewProd(newProd);
  tableBody.append(createRow(newProd));
  console.log(data);
  mainModal.classList.remove('active');
  form.reset();
});

