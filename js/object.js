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

// R E S T      S P R E A D
{
    const highTemperatures = {
        yesterday: 28,
        today: 26,
        tomorrow: 33,
    };

    const {
        yesterday: highYesterday,
        today: highToday,
        tomorrow = 25,
        tomorrow: highTomorrow,
        icon: highIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
    } = highTemperatures;

    const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
    console.log(`Середня температура:`, meanTemperature);
    // console.log(highIcon);
    // console.log(highTemperatures);
}
//
const forecast = {
    today: {
        low: 28,
        high: 32,
        icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
    },
    tomorrow: {
        low: 27,
        high: 31,
    },
};
// Change code below this line

const {
    today: {
        high: highToday,
        low: lowToday,
        icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
    },
    tomorrow: {
        high: highTomorrow,
        low: lowTomorrow,
        icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
    },
} = forecast;

// Change code below this line
function add(...args) {
    // Change code above this line
    let argsSum = 0;
    for (let arg of args) {
        argsSum += arg;
    }
    console.log(`argsSum:`, argsSum);
    return argsSum;
}
add(15, 27);
add(12, 15, 12);

function addOverNum(firstElement, ...args) {
    let total = 0;
    const a = firstElement;
    for (const arg of args) {
        if (arg > a) {
            total += arg;
        }
    }

    console.log(`total:`, total);
    return total;
    // Change code above this line
}
addOverNum(100, 12, 4, 11, 48, 10, 8);
addOverNum(1, 2, 4, 21, 48, 7, 8);

// Change code below this line
function findMatches(firstEltments, ...arg) {
    const matches = []; // Don't change this line
    for (let element of arg) {
        if (firstEltments.includes(element)) {
            matches.push(element);
        }
    }
    // Change code above this line
    console.log(`перевірка на наявність аргумента в масиві:`, matches);
    return matches;
}
findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7);
findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2);

const bookShelf = {
    // Change code below this line
    books: ['The last kingdom', 'The guardian of dreams'],
    getBooks() {
        return 'Returning all books';
    },
    addBook(bookName) {
        return `Adding book ${bookName}`;
    },
    removeBook(bookName) {
        console.log(`Deleting book ${bookName}`);
        return `Deleting book ${bookName}`;
    },
    updateBook(oldName, newName) {
        console.log(`Updating book ${oldName} to ${newName}`);
        return `Updating book ${oldName} to ${newName}`;
    },
    // Change code above this line
};
bookShelf.updateBook('Sands of dune', 'Dune');
bookShelf.removeBook('Red sunset');

//35

const bookShelfNew = {
    books: ['The last kingdom', 'Haze', 'The guardian of dreams', 'fasfasfasddfasd'],
    updateBookNew(oldName, newName) {
        // console.log(books.indexOf(oldName));

        // const a = this.books.indexOf(oldName);
        // console.log(`indexOf:`, a);
        this.books.splice(this.books.indexOf(oldName), 1, newName);

        console.log(this.books);
        // console.log(bookShelfNew.books);
    },
};
console.log(bookShelfNew.books);
bookShelfNew.updateBookNew('The last kingdom', 'Dune');
bookShelfNew.updateBookNew('Haze', 'Dungeon chronicles');

// ЗАДАЧА: РАСШИРЯЕМ ИНВЕНТАРЬ
const atTheOldToad = {
    potions: [
        { name: 'Speed potion', price: 460 },
        { name: 'Dragon breath', price: 780 },
        { name: 'Stone skin', price: 520 },
    ],
    // Change code below this line
    getPotions() {
        const {} = this.potions;
        return this.potions;
    },
    addPotion(newPotion) {
        for (let potionToad of this.potions) {
            const values = Object.values(potionToad);
            // console.log(values);
            if (values.includes(newPotion.name)) {
                // console.log(newPotion);
                console.log(`Error! Potion ${newPotion.name} is already in your inventory!`);
                return `Error! Potion ${newPotion.name} is already in your inventory!`;
            }
        }

        this.potions.push(newPotion);
    },
    removePotion(potionName) {
        for (let potionToad of this.potions) {
            if (potionToad.name === potionName) {
                const potionIndex = this.potions.indexOf(potionToad);
                return this.potions.splice(potionIndex, 1);
            }
        }
        console.log(`Potion ${potionName} is not in inventory!`);
        return `Potion ${potionName} is not in inventory!`;
    },
    updatePotionName(oldName, newName) {
        for (let potionToad of this.potions) {
            if (potionToad.name === oldName) {
                potionToad.name = newName;
            }
        }
        return `Potion ${oldName} is not in inventory!`;
    },
    // Change code above this line
};
// console.log(atTheOldToad.potions);
// atTheOldToad.getPotions();
// console.log(atTheOldToad.potions);

// atTheOldToad.addPotion({ name: 'Stone skin', price: 240 });
// console.log(atTheOldToad.potions);
// atTheOldToad.addPotion({ name: 'Stone skingdsgsd', price: 240 });
// console.log(atTheOldToad.potions);

// atTheOldToad.removePotion('Stone skin');
// console.log(atTheOldToad.potions);
// atTheOldToad.removePotion('Dragon breath');
// console.log(atTheOldToad.potions);

// atTheOldToad.updatePotionName('Stone skin', 'Invulnerability potion');
// console.log(atTheOldToad.potions);
// atTheOldToad.updatePotionName('Dragon breath', 'Polymorth');
