/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
'use strict';

const data = [
  {
    'id': 253842678,
    'name': 'Смартфон Xiaomi 11T 8/128GB',
    'price': 27000,
    'description': 'Смартфон Xiaomi 11T – это представитель флагманской линейки, выпущенной во второй половине 2021 года. И он полностью соответствует такому позиционированию, предоставляя своим обладателям возможность пользоваться отличными камерами, ни в чем себя не ограничивать при запуске игр и других требовательных приложений.',
    'category': 'mobile-phone',
    'discount_count': false,
    'count': 3,
    'units': 'шт',
    'images': {
      'small': 'img/smrtxiaomi11t-m.jpg',
      'big': 'img/smrtxiaomi11t-b.jpg',
    },
  },
  {
    'id': 296378448,
    'name': 'Радиоуправляемый автомобиль Cheetan',
    'price': 4000,
    'description': 'Внедорожник на дистанционном управлении. Скорость 25км/ч. Возраст 7 - 14 лет',
    'category': 'toys',
    'discount_count': 5,
    'count': 1,
    'units': 'шт',
    'images': {
      'small': 'img/cheetancar-m.jpg',
      'big': 'img/cheetancar-b.jpg',
    },
  },
  {
    'id': 215796548,
    'name': 'ТВ приставка MECOOL KI',
    'price': 12400,
    'description': 'Всего лишь один шаг сделает ваш телевизор умным, Быстрый и умный MECOOL KI PRO, прекрасно спроектированный, сочетает в себе прочный процессор Cortex-A53 с чипом Amlogic S905D',
    'category': 'tv-box',
    'discount_count': 15,
    'count': 4,
    'units': 'шт',
    'images': {
      'small': 'img/tvboxmecool-m.jpg',
      'big': 'img/tvboxmecool-b.jpg',
    },
  },
  {
    'id': 246258248,
    'name': 'Витая пара PROConnect 01-0043-3-25',
    'price': 22,
    'description': 'Витая пара Proconnect 01-0043-3-25 является сетевым кабелем с 4 парами проводов типа UTP, в качестве проводника в которых используется алюминий, плакированный медью CCA. Такая неэкранированная витая пара с одножильными проводами диаметром 0.50 мм широко применяется в процессе сетевых монтажных работ. С ее помощью вы сможете обеспечить развертывание локальной сети в домашних условиях или на предприятии, объединить все необходимое вам оборудование в единую сеть.',
    'category': 'cables',
    'discount_count': false,
    'count': 420,
    'units': 'v',
    'images': {
      'small': 'img/lan_proconnect43-3-25.jpg',
      'big': 'img/lan_proconnect43-3-25-b.jpg',
    },
  },
];

// eslint-disable-next-line require-jsdoc
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const headerTotalPrice = document.querySelector('.crm__total-price');

const mainModalTitle = document.querySelector('.modal__title');
const form = document.querySelector('.modal__form');
const modalTotalPrice = document.querySelector('.modal__total-price');
const modalCheckBox = document.querySelector('.modal__checkbox');
const modalCheckBoxDiscount = document.querySelector('.modal__input_discount');
const modalCheckBoxInput = document.querySelector('.modal__input');
const vendorCodeId = document.querySelector('.vendor-code__id');
const discountCount = document.querySelector('.modal__input_discount');

const mainModal = document.querySelector('.overlay');
const tableBody = document.querySelector('.table__body');
const btnAddGood = document.querySelector('.panel__add-goods');

mainModal.classList.remove('active');

const addNewProd = prod => data.push(prod);

// итоговая стоимость на странице

const getTotalPriceMain = (data) => {
  const total = data.map(data => (data.count * data.price) -
(data.price * data.count * data.discount_count / 100)).reduce(((a, b) => a + b), 0);
  return total;
};

const getModalPrice = () => (form.price.value * form.count.value) -
 (form.price.value * form.count.value * form.discount_count.value / 100);

form.price.addEventListener('blur', () => modalTotalPrice.innerHTML = getModalPrice());
form.count.addEventListener('blur', () => modalTotalPrice.innerHTML = getModalPrice());
form.discount_count.addEventListener('blur', () => modalTotalPrice.innerHTML = getModalPrice());

const uniqId = getRandomIntInclusive(1e8, 9e8);

// кнопка добавить товар

btnAddGood.addEventListener('click', () => {
  mainModal.classList.add('active');
  vendorCodeId.innerHTML = uniqId;
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
        headerTotalPrice.innerHTML = getTotalPriceMain(data);
      }
    });
  }
},
);

// чекбокс

modalCheckBox.addEventListener('click', () => {
  discountCount.toggleAttribute('disabled');
  if (discountCount.hasAttribute('disabled')) {
    form.discount_count.value = '';
  }
});

const createRow = data => tableBody.insertAdjacentHTML('afterbegin',
    `<tr data-id="${data.id}">
    <td class="table__cell">${data.id}</td>
    <td class="table__cell table__cell_left table__cell_name" >${data.name}</td>
    <td class="table__cell table__cell_left">${data.category}</td>
    <td class="table__cell">${data.units}</td>
    <td class="table__cell">${data.count}</td>
    <td class="table__cell">$${data.price}</td>
    <td class="table__cell">$${(data.count * data.price) - (data.price * data.count * data.discount_count / 100)}</td>
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
  newProd.id = uniqId;

  addNewProd(newProd);
  tableBody.append(createRow(newProd));
  mainModal.classList.remove('active');
  form.reset();
  headerTotalPrice.innerHTML = getTotalPriceMain(data);
});
