import {getTotalPriceMain} from './getPrice.js';
import {
  btnAddGood,
  mainModal,
  vendorCodeId,
  tableBody,
  headerTotalPrice,
} from './getElements.js';
import {uniqId} from './getRandom.js';
import {data} from './data.js';

export const delActive = mainModal.classList.remove('active');

// кнопка добавить товар

btnAddGood.addEventListener('click', () => {
  mainModal.classList.add('active');
  vendorCodeId.innerHTML = uniqId;
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

// кнопка изображения

tableBody.addEventListener('click', e => {
  const picUrl = e.target.closest('button').dataset.pic;
  if (e.target.closest('.table__btn_pic')) {
    open(picUrl, '',
        `
    width=800,
    height=600, 
    left=${(window.screen.width / 2 - 800 / 2)},
    top=${(window.screen.height / 2 - 600 / 2)},
    display=flex,
    justifyContent=center,
    alignItems=center
    `);
  }
});
