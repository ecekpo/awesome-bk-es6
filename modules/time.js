import { DateTime } from '../luxon.js';

const now = DateTime.now();

const insertDate = () => {
  const insertDateTime = document.querySelector('.insert-time');

  const dateDiv = document.createElement('div');
  dateDiv.classList.add('date');

  dateDiv.innerHTML = `${now.toLocaleString(DateTime.DATETIME_MED)}`;
  insertDateTime.appendChild(dateDiv);
};

export default insertDate;