'use strict';

// let input;
// const numbers = [];
// let total = 0;

// do {
//   input = prompt('Введите число', '');
//   if (!Number.isNaN(Number(input)) && input) {
//     numbers.push(input);
//     total = total + Number(input);
//   } else {
//     if (!input) break;
//     else alert('Было введено не число, попробуйте еще раз');
//   }
// } while (input != null);
// console.log(numbers.length);
// console.log(numbers);
// console.log('Общая сумма чисел равна ', total);

// for (let i = 0; i < numbers.length; i += 1) {
//   total = total + Number(numbers[i]);
// }
// console.log('Общая сумма чисел равна ', total);

// Задание 2

const passwords = ['q', '11', '123', '321'];
let attemptsLeft = 3;
let input;

do {
  attemptsLeft = attemptsLeft - 1;
  input = prompt('Введите пароль', '');
  if (attemptsLeft) {
    alert('У вас закончились попытки, аккаунт заблокирован!');
  } else {
    alert('Неверный пароль, у вас осталось ' + attemptsLeft + ' попыток');
  }
  for (let i = 0; i < passwords.length; i += 1) {
    if (input === passwords[i]) alert('Добро пожаловать!');
    break;
  }
} while (input != null && attemptsLeft);