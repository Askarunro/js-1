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
