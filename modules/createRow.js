import {data} from './data.js';
import {tableBody} from './getElements.js';

export const addNewProd = prod => data.push(prod);

export const createRow = data => tableBody.insertAdjacentHTML('afterbegin',
    `<tr data-id="${data.id}">
<td class="table__cell">${data.id}</td>
<td class="table__cell table__cell_left table__cell_name" >${data.name}</td>
<td class="table__cell table__cell_left">${data.category}</td>
<td class="table__cell">${data.units}</td>
<td class="table__cell">${data.count}</td>
<td class="table__cell">$${data.price}</td>
<td class="table__cell">$${(data.count * data.price) -
     (data.price * data.count * data.discount_count / 100)}</td>
<td class="table__cell table__cell_btn-wrapper">          
  <button class="table__btn table__btn_pic"></button>
  <button class="table__btn table__btn_edit"></button>
  <button class="table__btn table__btn_del"></button>
</td>
</tr> `,
);

const renderGoods = data => data.map(createRow);
renderGoods(data);
