'use strict';

let input;
const numbers = [];
let total = 0;

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
let input;
let passok;

do {
  console.log(attemptsLeft);
  input = prompt('Введите пароль', '');
  if (attemptsLeft) {
    attemptsLeft = attemptsLeft -= 1;
    for (let i = 0; i < passwords.length; i += 1) {
      if (input === passwords[i]) {
        alert('Добро пожаловать!');
        passok = true;
        break;
      }
    }
  } else {
    alert('У вас закончились попытки, аккаунт заблокирован!');
  }
  if (!passok && input != null && attemptsLeft) {
    alert('Неверный пароль, у вас осталось ' + attemptsLeft + ' попыток');
  } else break;
} while (input != null && attemptsLeft);
