const numbers = [5, 10, 15, 20, 25];

// // Класичний for
// for (let i = 0; i < numbers.length; i += 1) {
//     console.log(`Індекс ${i}, значення ${numbers[i]}`);
// }

// Метод перебирання forEach
numbers.forEach(function (number, index) {
    console.log(`Індекс ${index}, значення ${number}`);
});

//T A S K   2
function deliverPizza(pizzaName) {
    return `Delivering ${pizzaName} pizza.`;
}

function makePizza(pizzaName) {
    return `Pizza ${pizzaName} is being prepared, please wait...`;
}

// Chande code below this line
function makeMessage(pizzaName, callback) {
    const a = callback(pizzaName);
    console.log(a);
    return a;
}
makeMessage('Royal Grand', makePizza);
makeMessage('Royal Grand', deliverPizza);

//T A S K   3
function makePizza(pizzaName, callback) {
    console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
    callback(pizzaName);
}

makePizza('Royal Grand', function deliverPizza(pizzaName) {
    console.log(`Delivering pizza ${pizzaName}.`);
});
// Change code below this line

makePizza('Ultracheese', function deliverPizza(pizzaName) {
    console.log(`Delivering pizza ${pizzaName}.`);
});

//T A S K   4
const pizzaPalace = {
    pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
    order(pizzaName, onSuccess, onError) {
        if (this.pizzas.includes(pizzaName)) {
            const a = onSuccess(pizzaName);
            console.log(a);
            return a;
        }
        const b = onError(pizzaName);
        console.log(b);
        return b;
    },
};
// Change code above this line

// Callback for onSuccess
function makePizza(pizzaName) {
    return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

// Callback for onError
function onOrderError(error) {
    return `Error! There is no pizza with a name ${error} in the assortment.`;
}

// Method calls with callbacks
pizzaPalace.order('Smoked', makePizza, onOrderError);
pizzaPalace.order('Four meats', makePizza, onOrderError);
pizzaPalace.order('Big Mike', makePizza, onOrderError);
pizzaPalace.order('Vienna', makePizza, onOrderError);

//T A S K   5
function calculateTotalPrice(orderedItems) {
    let totalPrice = 0;
    // Change code below this line
    orderedItems.forEach(function (number) {
        totalPrice += number;
    });
    console.log(`сума чисел масиву:`, totalPrice);
    // Change code above this line
    return totalPrice;
}

calculateTotalPrice([12, 85, 37, 4]);
calculateTotalPrice([164, 48, 291]);
calculateTotalPrice([412, 371, 94, 63, 176]);

//T A S K   6
function filterArray(numbers, value) {
    const filteredNumbers = [];
    // Change code below this line
    numbers.forEach(function (number) {
        if (number > value) {
            filteredNumbers.push(number);
        }
    });

    // Change code above this line
    console.log(filteredNumbers);
    return filteredNumbers;
    z;
}
filterArray([1, 2, 3, 4, 5], 3);
filterArray([1, 2, 3, 4, 5], 4);
filterArray([1, 2, 3, 4, 5], 5);

//T A S K   7

function getCommonElements(firstArray, secondArray) {
    const commonElements = [];

    // Change code below this line
    firstArray.forEach(function (number) {
        if (secondArray.includes(number)) commonElements.push(number);
    });

    console.log(commonElements);
    return commonElements;
    // Change code above this line
}
getCommonElements([1, 2, 3], [2, 4]);
getCommonElements([1, 2, 3], [2, 1, 17, 19]);
