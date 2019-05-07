'use strict';

const adminLogin = 'admin';
/* const adminPassword = 'm4ng0h4ckz'; */
const adminPassword = '1';
const cancel = null;

let login = prompt(' Введите логин:');

/* const messages */

const badLoginMessage = 'Доступ запрещен, неверный логин!';
const badPassMessage = 'Доступ запрещен, неверный пароль!';
const welcomeMessage = 'Добро пожаловать, ' + login + '!';
const cancelMessage = 'Отменено пользователем!';

if (login === cancel) {
  alert(
    cancelMessage,
  ); /* сообщение про отмену юзером в случае нажатии на кнопу отмены в поле логина */
} else if (login === adminLogin) {
  const pass = prompt(
    ' Введите пароль:',
  ); /* ввод пароля только если логин совпал */
  if (pass === cancel) {
    alert(
      cancelMessage,
    ); /* сообщение про отмену юзером в случае нажатии на кнопу отмены в поле пароля */
  } else if (pass === adminPassword) {
    alert(welcomeMessage);
  } else {
    alert(badPassMessage);
  }
} else {
  alert(badLoginMessage);
}

/* задание 2 */

let credits;
let pricePerDroid;
let totalPrice;
let a;

credits = 23580;
pricePerDroid = 300;

a = prompt('Сколько дроидов хотите купить?', '0');
if (a != null && parseInt(a, 10)) {
  totalPrice = Number(a) * pricePerDroid;
  const message =
    'Вы купили [' +
    a +
    '] дроидов, на счету осталось [' +
    (credits - totalPrice) +
    '] кредитов.';
  if (totalPrice <= credits) {
    alert(message);
  } else {
    alert('Недостаточно средств на счету!');
  }
} else {
  alert('Отменено пользователем!');
}

/*Задание 3 */

let price;
let message;
const china = 100;
const sthAmerica = 250;
const australia = 170;
const india = 80;
const jamaica = 120;
const errmessage = 'В вашей стране доставка не доступна';

let country = prompt('Укажите страну доставки', '');
if (country) {
  switch (country.toLowerCase()) {
    case 'китай':
      price = china;
      break;
    case 'южная америка':
      price = sthAmerica;
      break;
    case 'австралия':
      price = australia;
      break;
    case 'индия':
      price = india;
      break;
    case 'ямайка':
      price = jamaica;
      break;
    default:
      message = errmessage;
  }

  if (message != errmessage) {
    message = 'Доставка в ' + country + ' будет стоить ' + price + ' кредитов';
  }

  alert(message);
} else alert('Отменено пользователем');
