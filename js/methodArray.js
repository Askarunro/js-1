// T A S K   15 map
const books = [
    {
        title: 'The Last Kingdom',
        author: 'Bernard Cornwell',
        rating: 8.38,
    },
    {
        title: 'Beside Still Waters',
        author: 'Robert Sheckley',
        rating: 8.51,
    },
    {
        title: 'The Dream of a Ridiculous Man',
        author: 'Fyodor Dostoevsky',
        rating: 9.75,
    },
    { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
    { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
];
// Change code below this line

const titles = books.map(booksName => booksName.title);
console.log(titles);

// T A S K   15 flatMap

const books1 = [
    {
        title: 'The Last Kingdom',
        author: 'Bernard Cornwell',
        genres: ['adventure', 'history'],
    },
    {
        title: 'Beside Still Waters',
        author: 'Robert Sheckley',
        genres: ['fiction'],
    },
    {
        title: 'Redder Than Blood',
        author: 'Tanith Lee',
        genres: ['horror', 'mysticism'],
    },
];
// Change code below this line

const genres = books1.flatMap(booksNew => booksNew.genres);
console.log(genres);

// T A S K   16 map
const getUserNames = users => {
    console.log(users.map(a => a.name));
    console.log(users.map(a => a.email));
    return;
};
console.log(getUserNames);

getUserNames([
    {
        name: 'Moore Hensley',
        email: 'moorehensley@indexia.com',
        eyeColor: 'blue',
        friends: ['Sharron Pace'],
        isActive: false,
        balance: 2811,
        skills: ['ipsum', 'lorem'],
        gender: 'male',
        age: 37,
    },
    {
        name: 'Sharlene Bush',
        email: 'sharlenebush@tubesys.com',
        eyeColor: 'blue',
        friends: ['Briana Decker', 'Sharron Pace'],
        isActive: true,
        balance: 3821,
        skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
        gender: 'female',
        age: 34,
    },
]);

// T A S K   19 filter
const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// Change code below this line

const evenNumbers = numbers.filter(item => item % 2 === 0);
const oddNumbers = numbers.filter(item => item % 2 === 1);
console.log(`парні числа`, evenNumbers);
console.log(`непарні числа`, oddNumbers);

// T A S K   20 filter
const books2 = [
    {
        title: 'The Last Kingdom',
        author: 'Bernard Cornwell',
        genres: ['adventure', 'history'],
    },
    {
        title: 'Beside Still Waters',
        author: 'Robert Sheckley',
        genres: ['fiction', 'mysticism'],
    },
    {
        title: 'Redder Than Blood',
        author: 'Tanith Lee',
        genres: ['horror', 'mysticism', 'adventure'],
    },
];

const allGenres = books2.flatMap(bookGenres => bookGenres.genres);
console.log(allGenres);
const uniqueGenres = allGenres.filter(
    (genresName, index, array) => array.indexOf(genresName) === index,
);
console.log(uniqueGenres);

// T A S K   21 filter

const MIN_RATING = 9;
const AUTHOR = 'Bernard Cornwell';

const topRatedBooks = books.filter(ratingUpper => ratingUpper.rating >= MIN_RATING);
console.log(topRatedBooks);
const booksByAuthor = books.filter(booksList => booksList.author === AUTHOR);
console.log(booksByAuthor);

// T A S K   21 filter

const getUsersWithEyeColor = (users, color) => {
    const b = users.filter(a => a.eyeColor === color);
    console.log(b);
    const c = b.map(x => x.name);
    console.log(c);
    return c;
};

getUsersWithEyeColor(
    [
        {
            name: 'Moore Hensley',
            email: 'moorehensley@indexia.com',
            eyeColor: 'blue',
            friends: ['Sharron Pace'],
            isActive: false,
            balance: 2811,
            gender: 'male',
        },
        {
            name: 'Sharlene Bush',
            email: 'sharlenebush@tubesys.com',
            eyeColor: 'blue',
            friends: ['Briana Decker', 'Sharron Pace'],
            isActive: true,
            balance: 3821,
            gender: 'female',
        },
        {
            name: 'Ross Vazquez',
            email: 'rossvazquez@xinware.com',
            eyeColor: 'green',
            friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
            isActive: false,
            balance: 3793,
            gender: 'male',
        },
    ],
    'blue',
);

// T A S K   23 filter

// Change code below this line
const getUsersWithAge = (users, minAge, maxAge) => {
    const a = users.filter(ageUser => ageUser.age > minAge && ageUser.age < maxAge);
    console.log(a);
};
// Change code above this line

getUsersWithAge(
    [
        {
            name: 'Moore Hensley',
            email: 'moorehensley@indexia.com',
            eyeColor: 'blue',
            friends: ['Sharron Pace'],
            isActive: false,
            balance: 2811,
            gender: 'male',
            age: 37,
        },
        {
            name: 'Sharlene Bush',
            email: 'sharlenebush@tubesys.com',
            eyeColor: 'blue',
            friends: ['Briana Decker', 'Sharron Pace'],
            isActive: true,
            balance: 3821,
            gender: 'female',
            age: 34,
        },
        {
            name: 'Ross Vazquez',
            email: 'rossvazquez@xinware.com',
            eyeColor: 'green',
            friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
            isActive: false,
            balance: 3793,
            gender: 'male',
            age: 24,
        },
        {
            name: 'Elma Head',
            email: 'elmahead@omatom.com',
            eyeColor: 'green',
            friends: ['Goldie Gentry', 'Aisha Tran'],
            isActive: true,
            balance: 2278,
            gender: 'female',
            age: 21,
        },
        {
            name: 'Carey Barr',
            email: 'careybarr@nurali.com',
            eyeColor: 'blue',
            friends: ['Jordan Sampson', 'Eddie Strong'],
            isActive: true,
            balance: 3951,
            gender: 'male',
            age: 27,
        },
        {
            name: 'Blackburn Dotson',
            email: 'blackburndotson@furnigeer.com',
            eyeColor: 'brown',
            friends: ['Jacklyn Lucas', 'Linda Chapman'],
            isActive: false,
            balance: 1498,
            gender: 'male',
            age: 38,
        },
        {
            name: 'Sheree Anthony',
            email: 'shereeanthony@kog.com',
            eyeColor: 'brown',
            friends: ['Goldie Gentry', 'Briana Decker'],
            isActive: true,
            balance: 2764,
            gender: 'female',
            age: 39,
        },
    ],
    20,
    30,
);

// T A S K 24
const getUsersWithFriend = (users, friendName) => {
    const a = users.filter(friend => friend.friends.includes(friendName));
    console.log(a);
    return;
};
getUsersWithFriend(
    [
        {
            name: 'Moore Hensley',
            email: 'moorehensley@indexia.com',
            eyeColor: 'blue',
            friends: ['Sharron Pace'],
            isActive: false,
            balance: 2811,
            gender: 'male',
            age: 37,
        },
        {
            name: 'Sharlene Bush',
            email: 'sharlenebush@tubesys.com',
            eyeColor: 'blue',
            friends: ['Briana Decker', 'Sharron Pace'],
            isActive: true,
            balance: 3821,
            gender: 'female',
            age: 34,
        },
        {
            name: 'Ross Vazquez',
            email: 'rossvazquez@xinware.com',
            eyeColor: 'green',
            friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
            isActive: false,
            balance: 3793,
            gender: 'male',
            age: 24,
        },
        {
            name: 'Elma Head',
            email: 'elmahead@omatom.com',
            eyeColor: 'green',
            friends: ['Goldie Gentry', 'Aisha Tran'],
            isActive: true,
            balance: 2278,
            gender: 'female',
            age: 21,
        },
        {
            name: 'Carey Barr',
            email: 'careybarr@nurali.com',
            eyeColor: 'blue',
            friends: ['Jordan Sampson', 'Eddie Strong'],
            isActive: true,
            balance: 3951,
            gender: 'male',
            age: 27,
        },
        {
            name: 'Blackburn Dotson',
            email: 'blackburndotson@furnigeer.com',
            eyeColor: 'brown',
            friends: ['Jacklyn Lucas', 'Linda Chapman'],
            isActive: false,
            balance: 1498,
            gender: 'male',
            age: 38,
        },
        {
            name: 'Sheree Anthony',
            email: 'shereeanthony@kog.com',
            eyeColor: 'brown',
            friends: ['Goldie Gentry', 'Briana Decker'],
            isActive: true,
            balance: 2764,
            gender: 'female',
            age: 39,
        },
    ],
    'Goldie Gentry',
);

// Change code below this line
const getFriends = users => {
    const arrayFriends = users.flatMap(a => a.friends);
    const a1 = arrayFriends.filter((item, index, array) => array.indexOf(item) === index);
    console.log(arrayFriends);
    console.log(a1);
};
// Change code above this line
getFriends([
    {
        name: 'Moore Hensley',
        email: 'moorehensley@indexia.com',
        eyeColor: 'blue',
        friends: ['Sharron Pace'],
        isActive: false,
        balance: 2811,
        gender: 'male',
        age: 37,
    },
    {
        name: 'Sharlene Bush',
        email: 'sharlenebush@tubesys.com',
        eyeColor: 'blue',
        friends: ['Briana Decker', 'Sharron Pace'],
        isActive: true,
        balance: 3821,
        gender: 'female',
        age: 34,
    },
    {
        name: 'Ross Vazquez',
        email: 'rossvazquez@xinware.com',
        eyeColor: 'green',
        friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
        isActive: false,
        balance: 3793,
        gender: 'male',
        age: 24,
    },
    {
        name: 'Elma Head',
        email: 'elmahead@omatom.com',
        eyeColor: 'green',
        friends: ['Goldie Gentry', 'Aisha Tran'],
        isActive: true,
        balance: 2278,
        gender: 'female',
        age: 21,
    },
    {
        name: 'Carey Barr',
        email: 'careybarr@nurali.com',
        eyeColor: 'blue',
        friends: ['Jordan Sampson', 'Eddie Strong'],
        isActive: true,
        balance: 3951,
        gender: 'male',
        age: 27,
    },
    {
        name: 'Blackburn Dotson',
        email: 'blackburndotson@furnigeer.com',
        eyeColor: 'brown',
        friends: ['Jacklyn Lucas', 'Linda Chapman'],
        isActive: false,
        balance: 1498,
        gender: 'male',
        age: 38,
    },
    {
        name: 'Sheree Anthony',
        email: 'shereeanthony@kog.com',
        eyeColor: 'brown',
        friends: ['Goldie Gentry', 'Briana Decker'],
        isActive: true,
        balance: 2764,
        gender: 'female',
        age: 39,
    },
]);
// T A S K   30
const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Change code below this line

const eachElementInFirstIsEven = firstArray.every(item => item % 2 === 1);
const eachElementInFirstIsOdd = firstArray.every(item => item % 2 === 0);

const eachElementInSecondIsEven = secondArray.every(item => item % 2 === 1);
const eachElementInSecondIsOdd = secondArray.every(item => item % 2 === 0);

const eachElementInThirdIsEven = thirdArray.every(item => item % 2 === 1);
const eachElementInThirdIsOdd = thirdArray.every(item => item % 2 === 0);

// T A S K    35
const players = [
    { name: 'Mango', playtime: 1270, gamesPlayed: 4 },
    { name: 'Poly', playtime: 469, gamesPlayed: 2 },
    { name: 'Ajax', playtime: 690, gamesPlayed: 3 },
    { name: 'Kiwi', playtime: 241, gamesPlayed: 1 },
];
// Change code below this line

const totalAveragePlaytimePerGame = players.reduce(
    (total, { playtime, gamesPlayed }) => total + playtime / gamesPlayed,
    0,
);
console.log(totalAveragePlaytimePerGame);

// T A S K    37

const getTotalFriendCount = users => {
    const b = users.flatMap(z => z.friends);
    console.log(b);
    const a = b.length;
    // const a = b.reduce((totalFriends, friends) => totalFriends + friends, 0);
    console.log(a);
    return a;

    const getTotalFriendCount = users => {
        const a = users.reduce((acc, friend) => [...acc, ...friend.friends], []);
        return a.length;
    };
};
getTotalFriendCount([
    {
        name: 'Moore Hensley',
        email: 'moorehensley@indexia.com',
        eyeColor: 'blue',
        friends: ['Sharron Pace'],
        isActive: false,
        balance: 2811,
        gender: 'male',
    },
    {
        name: 'Sharlene Bush',
        email: 'sharlenebush@tubesys.com',
        eyeColor: 'blue',
        friends: ['Briana Decker', 'Sharron Pace'],
        isActive: true,
        balance: 3821,
        gender: 'female',
    },
    {
        name: 'Ross Vazquez',
        email: 'rossvazquez@xinware.com',
        eyeColor: 'green',
        friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
        isActive: false,
        balance: 3793,
        gender: 'male',
    },
    {
        name: 'Elma Head',
        email: 'elmahead@omatom.com',
        eyeColor: 'green',
        friends: ['Goldie Gentry', 'Aisha Tran'],
        isActive: true,
        balance: 2278,
        gender: 'female',
    },
    {
        name: 'Carey Barr',
        email: 'careybarr@nurali.com',
        eyeColor: 'blue',
        friends: ['Jordan Sampson', 'Eddie Strong'],
        isActive: true,
        balance: 3951,
        gender: 'male',
    },
    {
        name: 'Blackburn Dotson',
        email: 'blackburndotson@furnigeer.com',
        eyeColor: 'brown',
        friends: ['Jacklyn Lucas', 'Linda Chapman'],
        isActive: false,
        balance: 1498,
        gender: 'male',
    },
    {
        name: 'Sheree Anthony',
        email: 'shereeanthony@kog.com',
        eyeColor: 'brown',
        friends: ['Goldie Gentry', 'Briana Decker'],
        isActive: true,
        balance: 2764,
        gender: 'female',
    },
]);

// T A S K  41
const books5 = [
    {
        title: 'The Last Kingdom',
        author: 'Bernard Cornwell',
        rating: 8.38,
    },
    {
        title: 'Beside Still Waters',
        author: 'Robert Sheckley',
        rating: 8.51,
    },
    {
        title: 'The Dream of a Ridiculous Man',
        author: 'Fyodor Dostoevsky',
        rating: 7.75,
    },
    { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
    { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
];
// Change code below this line

const sortedByAuthorName = [...books5].sort((a, b) => a.author.localeCompare(b.author));
console.log(sortedByAuthorName);
const sortedByReversedAuthorName = [...books5].sort((a, b) => b.author.localeCompare(a.author));
console.log(sortedByReversedAuthorName);
const sortedByAscendingRating = [...books5].sort((a, b) => a.rating - b.rating);
console.log(sortedByAscendingRating);
const sortedByDescentingRating = [...books5].sort((a, b) => b.rating - a.rating);
console.log(sortedByDescentingRating);

// T A S K    43
const sortByDescendingFriendCount = users => {
    const z = [...users].sort((a, b) => b.friends.length - a.friends.length);
    return z;
};

const books6 = [
    {
        title: 'The Last Kingdom',
        author: 'Bernard Cornwell',
        rating: 8.38,
    },
    {
        title: 'Beside Still Waters',
        author: 'Robert Sheckley',
        rating: 8.51,
    },
    {
        title: 'The Dream of a Ridiculous Man',
        author: 'Fyodor Dostoevsky',
        rating: 7.75,
    },
    { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
    {
        title: 'The Dreams in the Witch House',
        author: 'Howard Lovecraft',
        rating: 8.67,
    },
];
const MIN_BOOK_RATING = 8;
// Change code below this line

const names = [...books6]
    .sort((a, b) => a.author.localeCompare(b.author))
    .filter(book => book.rating > MIN_BOOK_RATING)
    .map(book => book.author);
console.log(names);

const getNamesSortedByFriendCount1 = users => {
    const userSort = [...users]
        .sort((a, b) => a.friends.length - b.friends.length)
        .map(friendsSort => friendsSort.name);
    console.table(userSort);
    console.table(users);
    return userSort;
};

getNamesSortedByFriendCount1([
    {
        name: 'Moore Hensley',
        email: 'moorehensley@indexia.com',
        eyeColor: 'blue',
        friends: ['Sharron Pace'],
        isActive: false,
        balance: 2811,
        gender: 'male',
    },
    {
        name: 'Sharlene Bush',
        email: 'sharlenebush@tubesys.com',
        eyeColor: 'blue',
        friends: ['Briana Decker', 'Sharron Pace'],
        isActive: true,
        balance: 3821,
        gender: 'female',
    },
    {
        name: 'Ross Vazquez',
        email: 'rossvazquez@xinware.com',
        eyeColor: 'green',
        friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
        isActive: false,
        balance: 3793,
        gender: 'male',
    },
    {
        name: 'Elma Head',
        email: 'elmahead@omatom.com',
        eyeColor: 'green',
        friends: ['Goldie Gentry', 'Aisha Tran'],
        isActive: true,
        balance: 2278,
        gender: 'female',
    },
    {
        name: 'Carey Barr',
        email: 'careybarr@nurali.com',
        eyeColor: 'blue',
        friends: ['Jordan Sampson', 'Eddie Strong', 'Adrian Cross'],
        isActive: true,
        balance: 3951,
        gender: 'male',
    },
    {
        name: 'Blackburn Dotson',
        email: 'blackburndotson@furnigeer.com',
        eyeColor: 'brown',
        friends: ['Jacklyn Lucas', 'Linda Chapman', 'Adrian Cross', 'Solomon Fokes'],
        isActive: false,
        balance: 1498,
        gender: 'male',
    },
    {
        name: 'Sheree Anthony',
        email: 'shereeanthony@kog.com',
        eyeColor: 'brown',
        friends: ['Goldie Gentry', 'Briana Decker'],
        isActive: true,
        balance: 2764,
        gender: 'female',
    },
]);

const getSortedFriends = users => {
    const x = users
        .flatMap(userFriends => userFriends.friends)
        .filter((friend1, index, array) => array.indexOf(friend1) === index)
        .sort((a, b) => a.localeCompare(b));
    console.table(x);
    return x;
};

getSortedFriends([
    {
        name: 'Moore Hensley',
        email: 'moorehensley@indexia.com',
        eyeColor: 'blue',
        friends: ['Sharron Pace'],
        isActive: false,
        balance: 2811,
        gender: 'male',
    },
    {
        name: 'Sharlene Bush',
        email: 'sharlenebush@tubesys.com',
        eyeColor: 'blue',
        friends: ['Briana Decker', 'Sharron Pace'],
        isActive: true,
        balance: 3821,
        gender: 'female',
    },
    {
        name: 'Ross Vazquez',
        email: 'rossvazquez@xinware.com',
        eyeColor: 'green',
        friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
        isActive: false,
        balance: 3793,
        gender: 'male',
    },
    {
        name: 'Elma Head',
        email: 'elmahead@omatom.com',
        eyeColor: 'green',
        friends: ['Goldie Gentry', 'Aisha Tran'],
        isActive: true,
        balance: 2278,
        gender: 'female',
    },
    {
        name: 'Carey Barr',
        email: 'careybarr@nurali.com',
        eyeColor: 'blue',
        friends: ['Jordan Sampson', 'Eddie Strong', 'Adrian Cross'],
        isActive: true,
        balance: 3951,
        gender: 'male',
    },
    {
        name: 'Blackburn Dotson',
        email: 'blackburndotson@furnigeer.com',
        eyeColor: 'brown',
        friends: ['Jacklyn Lucas', 'Linda Chapman', 'Adrian Cross', 'Solomon Fokes'],
        isActive: false,
        balance: 1498,
        gender: 'male',
    },
    {
        name: 'Sheree Anthony',
        email: 'shereeanthony@kog.com',
        eyeColor: 'brown',
        friends: ['Goldie Gentry', 'Briana Decker'],
        isActive: true,
        balance: 2764,
        gender: 'female',
    },
]);

const getTotalBalanceByGender = (users, gender) => {
    const balanceGender = users
        .filter(user => user.gender === gender)
        .map(user1 => user1.balance)
        .reduce((acc, value) => acc + value, 0);
    console.log(balanceGender);

    return balanceGender;
};
getTotalBalanceByGender(
    [
        {
            name: 'Moore Hensley',
            email: 'moorehensley@indexia.com',
            eyeColor: 'blue',
            friends: ['Sharron Pace'],
            isActive: false,
            balance: 2811,
            gender: 'male',
        },
        {
            name: 'Sharlene Bush',
            email: 'sharlenebush@tubesys.com',
            eyeColor: 'blue',
            friends: ['Briana Decker', 'Sharron Pace'],
            isActive: true,
            balance: 3821,
            gender: 'female',
        },
        {
            name: 'Ross Vazquez',
            email: 'rossvazquez@xinware.com',
            eyeColor: 'green',
            friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
            isActive: false,
            balance: 3793,
            gender: 'male',
        },
        {
            name: 'Elma Head',
            email: 'elmahead@omatom.com',
            eyeColor: 'green',
            friends: ['Goldie Gentry', 'Aisha Tran'],
            isActive: true,
            balance: 2278,
            gender: 'female',
        },
        {
            name: 'Carey Barr',
            email: 'careybarr@nurali.com',
            eyeColor: 'blue',
            friends: ['Jordan Sampson', 'Eddie Strong', 'Adrian Cross'],
            isActive: true,
            balance: 3951,
            gender: 'male',
        },
        {
            name: 'Blackburn Dotson',
            email: 'blackburndotson@furnigeer.com',
            eyeColor: 'brown',
            friends: ['Jacklyn Lucas', 'Linda Chapman', 'Adrian Cross', 'Solomon Fokes'],
            isActive: false,
            balance: 1498,
            gender: 'male',
        },
        {
            name: 'Sheree Anthony',
            email: 'shereeanthony@kog.com',
            eyeColor: 'brown',
            friends: ['Goldie Gentry', 'Briana Decker'],
            isActive: true,
            balance: 2764,
            gender: 'female',
        },
    ],
    'female',
);

const fA = (a1, a2) => {
    const c = [];
    for (let number of a1) {
        if (a2.includes(number) == false) {
            c.push(number);
        }
    }
    console.log(c.concat(a2));
};
// const fA = (a1, a2) =>
//     console.log([...a1, ...a2].filter((number, index, array) => array.indexOf(number) === index));
fA([1, 2, 3, 4], [2, 3, 5, 6]);
