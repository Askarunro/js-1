// const a = 10;
// let x = 5;

// console.log(a);
// alert();
// console.log(x);

// let quantity = prompt ('введіть кількість товару');
// // quantity = Number(quantity);
// console.log(quantity);
// console.log(typeof quantity);

// const x = 10;
// const y = 5;

// // Сложение
// console.log(x + y); // 15

// // Вычитание
// console.log(x - y); // 5

// // Умножение
// console.log(x * y); // 50

// // Деление
// console.log(x / y); // 2

// // Остаток от деления
// console.log(x % y); // 0

// // Сложение с заменой (также есть для всех других операторов)
// let value = 5;

// // Аналогично записи value = value + 10;
// value += 10;
// console.log(value); // 15

// Операторы сравнения#
// Используются для сравнения двух значений. Результатом своего выполнения возвращают буль - true или false, то есть «да» или «нет».

// a > b и a < b - больше/меньше
// a >= b и a <= b - больше/меньше или равно
// a == b - равенство
// a != b - неравенство
// a === b - строгое равенство
// a !== b - строгое неравенство
// const x = 5;
// const y = 10;
// const z = 5;

// console.log("x > y:", x > y); // false
// console.log("x < y:", x < y); // true
// console.log("x < z:", x < z); // false
// console.log("x <= z:", x <= z); // true
// console.log("x === y:", x === y); // false
// console.log("x === z:", x === z); // true
// console.log("x !== y:", x !== y); // true
// console.log("x !== z:", x !== z); // false

// // Math.floor(num) - возвращает наибольшее целое число,
// // меньшее, либо равное указанному
// console.log(Math.floor(1.7)); // 1

// // Math.ceil(num) - возвращает наименьшее целое число,
// // большее, либо равное указанному числу.
// console.log(Math.ceil(1.2)); // 2

// // Math.round(num) - возвращает значение числа,
// // округлённое до ближайшего целого
// console.log(Math.round(1.2)); // 1
// console.log(Math.round(1.5)); // 2

// // Math.max(num1, num2, ...) - возвращает наибольшее число из набора
// console.log(Math.max(20, 10, 50, 40)); // 50

// // Math.min(num1, num2, ...) - возвращает наименьшее число из набора
// console.log(Math.min(20, 10, 50, 40)); // 10

// // Math.pow(base, exponent) - возведение в степень
// console.log(Math.pow(2, 4)); // 16

// // Math.random() - возвращает псевдослучайное число в диапазоне [0, 1)
// console.log(Math.random()); // случайное число между 0 и 1
// console.log(Math.random() * (10 - 1) + 1); // псевдослучайное число от 1 до 10

// let base = prompt('число');
// base = Number(base);

// console.log(base);

// let power = prompt('степінь');
// power = Number(power);

// console.log(power);

// const result = base ** power;
// console.log(result);

// // console.log(Math.pow(base , power));

// const name = 'fdgfsd' + 'fdsfsd' + 'fdsfsdfs' + 'power';

// function sayHi() {
//     console.log('Hello, this is my first function!');
// }
// sayHi();

// const string = 'qwerttyuiioio';
// const length = 5;

// console.log(string.slice(0, length));

// const message = 'qwerttuyuiiuyti gtrhtrhtrh';
// const maxLength = 15;
// let result;
// // Change code below this line
// if (message.length <= maxLength) {
//     result = message;
// } else {
//     result = `${message.slice(0, maxLength)}...`;
// }
// /// Change code above this line
// console.log(result);

// const message = 'ldshfdshfls span fldskjfldsj';
// let result;
// // Change code below this line
// if (message.includes('spam') || message.includes('sale')) {
//     result = true;
// } else {
//     result = false;
// }
// // Change code above this line
// console.log(result);

// for (let i = 0; i < 6; i += 1) {
//     console.log(i);

//     let price;
//     switch (i) {
//         case 1:
//         case 4:
//             price = 100;
//             break;
//         case 2:
//         case 5:
//         case 7:
//             price = 150;
//             break;
//         case 3:
//         case 6:
//             price = 200;
//             break;
//         default:
//             'blabla';
//     }
//     console.log(price);
// }
