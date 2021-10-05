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
