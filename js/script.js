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

// М А С И В И
// Вибірка останнього
const client = [1, 2, 5, 8, 7];
const clientEnd = client.length - 1;
console.log(`останній клієнт: ${client[clientEnd]}`);

// перевизначення

const testNumber = [12, 15, 45, 3, 7, 5];
testNumber[2] = 1555;
testNumber[5] = 1000;

console.log(testNumber);

// Розгалуження
const numberRoom = [100, 200, 120, 150, 1, 5, 45, 2, 48, 152];
numberRoom[5] = 25;
const maxNumber = 45;
for (let i = 2; i < numberRoom.length; i += 1) {
    if (numberRoom[i] <= maxNumber) {
        continue;
    } else {
        console.log(`Число більше за ${maxNumber} :  ${numberRoom[i]}`);
    }
}
console.log(numberRoom);

// for ......of

const arrayFruits = ['Mango', 'Avokado', 'Lemon'];

for (const fruit of arrayFruits) {
    console.log(fruit);
}

// break

const arrayImportFruits = ['Mango', 'Avokado', 'Lemon'];
const fruitBuy = 'Avokado';
let messageBreak;

for (const importFruit of arrayImportFruits) {
    if (fruitBuy === importFruit) {
        messageBreak = `Так ми імпортуємо ${importFruit}`;
    } else {
        messageBreak = `Нажаль ми не займаємося імпортом ${importFruit}`;
    }
    console.log(messageBreak);
}

// Приствоєння  за значенням
let abc = 5;
// Присвоєння за значенням, в пам'яті будет створена ще
// одна комірка, в яку буде скопійоване значення 5
let bcd = abc;
console.log(abc); // 5
console.log(bcd); // 5

// Змінимо значення a
abc = 10;
console.log(abc); // 10
// Значення b не змінилося, оскільки це окрема копія
console.log(bcd); // 5

// Приствоєння за посиланням
const a = ['Mango'];
// Оскільки a - це масив, в b записується посилання на вже існуючий
// масив в пам'яті. Тепер a і b вказують на той самий масив.
const b = a;
console.log(a); // ["Mango"]
console.log(b); // ["Mango"]

// Змінимо масив, додавши ще один елемент, використовуючи вказівник з a
a.push('Poly');
console.log(a); // ["Mango", "Poly"]

// b також змінилось, тому що b, як і a,
// просто містить посилання на те ж саме місце в пам'яті
console.log(b); // ["Mango", "Poly"]

// Результат повторюється
b.push('Ajax');
console.log(a); // ["Mango", "Poly", "Ajax"]
console.log(b); // ["Mango", "Poly", "Ajax"]

// М Е Т О Д И    М А С И В У

// s p l i t ()   j o i n ()

const stringToArray = 'New method array';
const stringToArray1 = 'New, method, array';

const newStringToArray = ['New', 'method', 'array', '4', '5'];
console.log(newStringToArray.indexOf('5'));
console.log(newStringToArray.includes('array'));

console.log(stringToArray.split(''));
console.log(stringToArray1.split(' '));

console.log(newStringToArray.join('--'));

// i n c l u d e s
const fruitsArray = ['Apple', 'blueberry', 'strawberry', 'cherry', 'cranberries'];
const fruitSaerch = 'cherry';

const hasFruit = fruitsArray.includes(fruitSaerch);

if (hasFruit) {
    console.log(`${fruitSaerch} is a red fruit!`);
}

// М е т о д и   p u s h () і   p o p()
const numbers = [];
numbers.push(10, 15, 16);
console.log(numbers);
numbers.push(45);
console.log(numbers);

console.log(numbers.pop());
console.log(numbers);

// М е т о д   s p l i c e ()#

const arrayCars = ['BMW', 'AUDI', 'VW', 'FIAT'];
// delete
const arrayCarsDelete = arrayCars.splice(1, arrayCars.length - 2);
console.log(arrayCars);

// add
const arrayCarsAdd = ['BMW', 'AUDI', 'VW', 'FIAT'];
arrayCarsAdd.splice(1, 0, 'SEAT', 'OPEL');
console.log(arrayCarsAdd);

// replacement
const arrayCarsNew = ['BMW', 'AUDI', 'VW', 'FIAT'];
arrayCarsNew.splice(0, 1, 'SEAT', 'OPEL');
console.log(`Замінили автомобілі : ${arrayCarsNew}`);

// М е т о д   c o n c a t()#
const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
const newClients = ['Monkong', 'Singu'];

const allClientsWithOldFirst = oldClients.concat(newClients);
console.log(`Старі клієнти + нові: ${allClientsWithOldFirst}`); // ["Mango", "Ajax", "Poly", "Kiwi", "Monkong", "Singu"]

const allClientsWithNewFirst = newClients.concat(oldClients);
console.log(`Нові клієнти + старі: ${allClientsWithNewFirst}`); // ["Monkong", "Singu", "Mango", "Ajax", "Poly", "Kiwi"]

console.log(`Старі клієнти: ${oldClients}`); // ["Mango", "Ajax", "Poly", "Kiwi"]
console.log(`Нові клієнти: ${newClients}`); // ["Monkong", "Singu"]

// Ф У Н К Ц І Ї
const funString = 'Ф У Н К Ц І Ї';
console.log(funString);

function multiply(x, y) {
    console.log(`Результат множення : ${x * y}`);
}
multiply(2, 4);
multiply(22, 14);
multiply(3, 56);
// --------------------------------------------

function getExtremeElements(array) {
    // Change code below this line
    const a1 = array[array.length - 1];
    const a2 = array[0];
    const a3 = [a2, a1];
    console.log(a1);
    console.log(`завдання` + a3);
    // return c1.push(a1, b1);

    // Change code above this line
}
getExtremeElements([1, 2, 3, 4, 5, 6]);
getExtremeElements([1, 22, 33, 43, 52, 6]);

// --------------------------------------------

function slugify(title) {
    // Change code below this line

    const slug = title.toLowerCase().replaceAll(' ', '-');
    console.log(slug);
    return;

    // Change code above this line
}
slugify('Arrays for begginers');
slugify('English for developer');
slugify('Ten secrets of JavaScript');

// --------------------------------------------
const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];
const firstTwoEls = fruits.slice(0, 2);
const a1 = fruits.length - 1;
const nonExtremeEls = fruits.slice(1, a1);
const lastThreeEls = fruits.slice(-3);
console.log(firstTwoEls);
console.log(nonExtremeEls);
console.log(lastThreeEls);
// --------------------------------------------

function calculateTotal(number) {
    let sum = 0;
    // Change code below this line
    for (let i = 0; i <= number; i += 1) {
        sum += i;
    }
    console.log(sum);
    // Change code above this line
}
calculateTotal(3);
calculateTotal(4);

function calculateTotalPrice(order) {
    let total = 0;
    // Change code below this line
    for (let i = 0; i < order.length; i += 1) {
        total += order[i];
    }
    // Change code above this line
    console.log(total);
}
calculateTotalPrice([12, 85, 37, 4]);
calculateTotalPrice([1, 5, 7, 4]);

// перевірка на найбільше значення.
function findLongestWord(string) {
    const a = string.split(' ');
    console.log(a);
    let b = a[0];
    for (let c of a) {
        if (c.length > b.length) {
            b = c;
        }
    }
    console.log(b);
}

findLongestWord('The quick brown fox jumped over the lazy dog');
findLongestWord('Google do a roll');

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
// for (let number i = min; i < max; i+=){
// if (number % 2===0){
// 	numbers.push('i');
// }
// }
//   // Change code above this line
//   return numbers;
// }
// createArrayOfNumbers(1, 5)
// createArrayOfNumbers(2, 4)
// createArrayOfNumbers(2, 7)

function createArrayOfNumbers(min, max) {
    const numbers = [];
    // Change code below this line
    // let number = 0;
    for (let i = min; i <= max; i += 1) {
        if (i >= min && i <= max) {
            numbers.push(i);
        }
    }
    // Change code above this line
    console.log(numbers);
    return numbers;
}

createArrayOfNumbers(1, 5);
createArrayOfNumbers(2, 4);
createArrayOfNumbers(2, 7);

function asdff(numbers, value) {
    // Change code below this line
    const array1n = [];

    for (let number of numbers) {
        if (number > value) {
            array1n.push(number);
        }
    }
    console.log(array1n);
    return array1n;
    // Change code above this line
}
asdff([1, 2, 3, 4, 5], 3);
asdff([1, 2, 3, 4, 5], 5);

function getCommonElements(array1, array2) {
    // Change code below this line
    const array3 = [];

    for (let numberArray1 of array1) {
        if (array2.includes(numberArray1)) {
            array3.push(numberArray1);
        }
    }
    console.log(array3);
    return array3;

    // Change code above this line
}
getCommonElements([1, 2, 3], [2, 4]);
getCommonElements([1, 2, 3], [2, 1, 17, 19]);
getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);

// function calculateTotalPrice(order) {
//     let total = 0;
//     // Change code below this line

//     for (let i = 0; i < order.length; i += 1) {
//         total += order[i];
//     }
//     for (let order1 of order) {
//         total += order1;
//     }

//     // Change code above this line
//     return total;
// }

function getEvenNumbers(start, end) {
    // Change code below this line
    const array12 = [];
    for (let i = start; i <= end; i += 1) {
        if (i % 2 === 0) {
            array12.push(i);
        }
    }
    console.log(`тільки парні з проміжку [${start} ${end}] : ${array12}`);
    return array12;
    // Change code above this line
}
getEvenNumbers(1, 23);
getEvenNumbers(23, 45);
getEvenNumbers(44, 67);

function includes(array, value) {
    // Change code below this line
    // for (let array23 of array) {
    //     if (array23 === value) {
    for (let i = 0; i < array.length; i += 1) {
        if (array[i] === value) {
            return true;
        }
    }
    return false;
    // Change code above this line
}
includes([1, 2, 3, 4, 5], 3);
includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Jupiter');
includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Jupiterdsa');

function repeatStr(n, s) {
    let a = [];
    for (let i = 1; i <= n; i += 1) {
        a.push(s);
    }
    console.log(a.join(''));
    return a.join('');
}

repeatStr(3, '*');
repeatStr(5, '#');
repeatStr(2, 'ha ');

function boolToWord(bool) {
    //...
    let boolRez = bool === true ? 'Yes' : 'No';
    return boolRez;
}
boolToWord(true);
boolToWord(false);

const findSmallestInt = function () {
    console.log(arguments);
};
findSmallestInt([1, 2, 3, 4]);
findSmallestInt([11, 21, 31, 41]);
findSmallestInt([12, 22, 32, 42]);

// Arguments [Array(4), callee: ƒ, Symbol(Symbol.iterator): ƒ]
//[Array(4)]

// OBJECTS
const apartment = {
    descr: 'Spacious apartment in the city center',
    rating: 4,
    price: 2153,
};
const keys = [];
const values = [];
// Change code below this line
for (const key in apartment) {
    keys.push(key);
    values.push(apartment[key]);
}
console.log(keys);
console.log(values);

function countProps(object) {
    let propCount = 0;
    // Change code below this line
    const keys = Object.keys(object);
    propCount = keys.length;
    // Change code above this line
    console.log(propCount);
    return propCount;
}
countProps({ name: 'Mango', age: 2, name1: 'Mango', age1: 2 });
countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 });
countProps({ a1: [1, 1, 1, 1, 3, 4, 56] });

const apartment1 = {
    descr: 'Spacious apartment in the city center',
    rating: 4,
    price: 2153,
};
const values1 = Object.values(apartment1);
// Change code below this line
// const keys11 = Object.keys(apartment1);
// for (let key of key1) {
//     values.push(apartment1[key]);
// }

const keys1 = Object.keys(apartment1);

console.log(values1);
console.log(keys1);

function countTotalSalary(salaries) {
    let totalSalary = 0;
    // Change code below this line
    const arraySalaries = Object.values(salaries);
    for (let salary of arraySalaries) {
        totalSalary += salary;
    }
    console.log(totalSalary);
    // Change code above this line

    return totalSalary;
}

countTotalSalary({ mango: 10, poly: 150, alfred: 80 });
countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 });

const products2 = [
    { name: 'Radar', price: 1300, quantity: 4 },
    { name: 'Scanner', price: 2700, quantity: 3 },
    { name: 'Droid', price: 400, quantity: 7 },
    { name: 'Grip', price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
    // Change code below this line
    for (let product of products2) {
        const values2 = Object.values(product);
        if (values2.includes(productName)) {
            console.log(`ціна продукту:`, product.price);
            return;
        }
    }
    console.log(`Продукт не знайдено:`, null);
    return null;
    // Change code above this line
}
getProductPrice('Radar');
getProductPrice('Grip');
getProductPrice('Grip11fds');

const products3 = [
    { name: 'Radar', price: 1300, quantity: 4 },
    { name: 'Scanner', price: 2700, quantity: 3 },
    { name: 'Droid', price: 400, quantity: 7 },
    { name: 'Grip', price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
    // Change code below this line
    const arrayValues = [];

    for (let product of products3) {
        const a = propName;
        const b = Object.keys(product);
        // console.log(b);

        if (b.includes(a)) {
            arrayValues.push(product[a]);

            // console.log(Object.keys(product));
        }
    }
    console.log(`Результат:`, arrayValues);
    return arrayValues;

    // Change code above this line
}
getAllPropValues('quantity');
getAllPropValues('price');
getAllPropValues('prifddsce');

//ЗАДАЧА. ОБЩАЯ СТОИМОСТЬ ТОВАРА
// Напиши функцию calculateTotalPrice(productName)
// которая принимает один параметр productName - название
// товара.Функция должна вернуть общую стоимость(цена * количество)
// товара с таким именем из массива products.
const productsABC = [
    { name: 'Radar', price: 1300, quantity: 4 },
    { name: 'Scanner', price: 2700, quantity: 3 },
    { name: 'Droid', price: 400, quantity: 7 },
    { name: 'Grip', price: 1200, quantity: 9 },
];

function calculateTotalPrice5(productName5) {
    // Пиши код ниже этой строки
    let c = 0;
    for (let product of productsABC) {
        // const a = productName5;
        // const b = Object.values(product);
        // if (b.includes(a)) {
        //     c += product.price * product.quantity;
        //     // console.log(product.price);
        //     // console.log(product.quantity);
        //     console.log(`Результат totalPrice:`, c);
        //     return c;
        // }

        if (Object.values(product).includes(productName5)) {
            c += product.price * product.quantity;
            // console.log(product.price);
            // console.log(product.quantity);
            console.log(`Результат totalPrice:`, c);
            return c;
        }
    }
    return c;
    // Пиши код выше этой строки
}
calculateTotalPrice5('Blaster');
calculateTotalPrice5('Radar');
calculateTotalPrice5('Droid');
