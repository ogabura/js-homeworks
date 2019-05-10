'use strict';

const numbers = [];
let total = 0;
let input;

do {
  input = prompt('Введите число', '');
  if (!Number.isNaN(Number(input)) && input) {
    numbers.push(input);
    total = total + Number(input);
  } else {
    if (!input) break;
    else alert('Было введено не число, попробуйте еще раз');
  }
} while (input != null);
console.log(numbers.length);
console.log(numbers);
console.log('Общая сумма чисел равна ', total);

for (let i = 0; i < numbers.length; i += 1) {
  total = total + Number(numbers[i]);
}
console.log('Общая сумма чисел равна ', total);

// Задание 2

const passwords = ['q', '11', '123', '321'];
let attemptsLeft = 3;
let passok;
let input1;

do {
  input1 = prompt('Введите пароль', '');
  if (input1 != null && passwords.includes(input1)) {
    alert('Добро пожаловать!');
    break;
  } else {
    attemptsLeft -= 1;
    if (input1 != null && attemptsLeft) {
      //attemptsLeft -= 1;
      alert('Неверный пароль, у вас осталось ' + attemptsLeft + ' попыток');
    } else {
      if (!attemptsLeft) {
        alert('У вас закончились попытки, аккаунт заблокирован!');
        break;
      } else {
        alert('Отменено пользователем');
        break;
      }
    }
  }
} while (attemptsLeft);
