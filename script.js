/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
'use strict';

const data =
[
  {
    'id': 253842678,
    'title': 'Смартфон Xiaomi 11T 8/128GB',
    'price': 27000,
    'description': `Смартфон Xiaomi 11T – это представитель флагманской линейки,
     выпущенной во второй половине 2021 года. И он полностью соответствует такому
      позиционированию, предоставляя своим обладателям возможность пользоваться
       отличными камерами, ни в чем себя не ограничивать при запуске игр и других
        требовательных приложений.`,
    'category': 'Мобильные телефоны',
    'discont': false,
    'count': 3,
    'units': 'шт',
    'images': {
      'small': 'img/smrtxiaomi11t-m.jpg',
      'big': 'img/smrtxiaomi11t-b.jpg',
    },
  },
  {
    'id': 296378448,
    'title': 'Радиоуправляемый автомобиль Cheetan',
    'price': 4000,
    'description': 'Внедорожник на дистанционном управлении. Скорость 25км/ч. Возраст 7 - 14 лет',
    'category': 'Игрушки',
    'discont': 5,
    'count': 1,
    'units': 'шт',
    'images': {
      'small': 'img/cheetancar-m.jpg',
      'big': 'img/cheetancar-b.jpg',
    },
  },
  {
    'id': 215796548,
    'title': 'ТВ приставка MECOOL KI',
    'price': 12400,
    'description': `Всего лишь один шаг сделает ваш телевизор умным, Быстрый и умный MECOOL
     KI PRO, прекрасно спроектированный, сочетает в себе прочный процессор Cortex-A53 с чипом
      Amlogic S905D'`,
    'category': 'ТВ приставки',
    'discont': 15,
    'count': 4,
    'units': 'шт',
    'images': {
      'small': 'img/tvboxmecool-m.jpg',
      'big': 'img/tvboxmecool-b.jpg',
    },
  },
  {
    'id': 246258248,
    'title': 'Витая пара PROConnect 01-0043-3-25',
    'price': 22,
    'description': `Витая пара Proconnect 01-0043-3-25 является сетевым кабелем с 4 парами
     проводов типа UTP, в качестве проводника в которых используется алюминий, плакированный
      медью CCA. Такая неэкранированная витая пара с одножильными проводами диаметром 0.50 мм
       широко применяется в процессе сетевых монтажных работ. С ее помощью вы сможете обеспечить
        развертывание локальной сети в домашних условиях или на предприятии, объединить все
         необходимое вам оборудование в единую сеть.`,
    'category': 'Кабели',
    'discont': false,
    'count': 420,
    'units': 'v',
    'images': {
      'small': 'img/lan_proconnect43-3-25.jpg',
      'big': 'img/lan_proconnect43-3-25-b.jpg',
    },
  },
];

const mainModalTitle = document.querySelector('.modal__title');
const mainModalForm = document.querySelector('.modal__form');
const modalCheckBox = document.querySelector('.modal__checkbox');
const modalInputCheckBox = document.querySelector('.modal__input_discount');
const toggleModal = document.querySelector('.overlay');
const tableBody = document.querySelector('.table__body');

toggleModal.classList.toggle('active');

const createRow = data => tableBody.insertAdjacentHTML('afterbegin',
    `<tr data-id="${data.id}">
    <td class="table__cell">${data.id}</td>
    <td class="table__cell table__cell_left table__cell_name" >${data.title}</td>
    <td class="table__cell table__cell_left">${data.category}</td>
    <td class="table__cell">${data.units}</td>
    <td class="table__cell">${data.count}</td>
    <td class="table__cell">$${data.price}</td>
    <td class="table__cell">$${(data.count * data.price) - (data.price * data.count * data.discont / 100)}</td>
    <td class="table__cell table__cell_btn-wrapper">          
      <button class="table__btn table__btn_pic"></button>
      <button class="table__btn table__btn_edit"></button>
      <button class="table__btn table__btn_del"></button>
    </td>
  </tr> `,
);

const renderGoods = (data) => {
  const prods = data.map(createRow);
  return prods;
};
renderGoods(data);
