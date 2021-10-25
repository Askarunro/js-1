function opposite(number) {
    //your code here

    console.log(-1 * number);
    return -1 * number;
}
opposite(5);
opposite(3214);

function solution(str, ending) {
    console.log(str.includes(ending));
    // TODO: complete
}
solution('abcde', 'cde');
solution('abcde', 'abc');

function sumMix(x) {
    const totalSum = [...x].reduce((acc, element) => acc + Number(element), 0);
    console.log(totalSum);
    return totalSum;
}
sumMix([9, 3, '7', '3'], 22);
sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7], 42);

function solution1(str) {
    const a = str.split('').reverse().join('');
    console.log(a);
}
solution1('world');
solution1('hello');

class StringBuilder {
    constructor(initialValue) {
        this.value = initialValue;
    }
    getValue() {
        return this.value;
    }
    padEnd(str) {
        return (this.value = `${this.value}${str}`);
    }
    padStart(str) {
        return (this.value = `${str}${this.value}`);
    }
    padBoth(str) {
        return (this.value = `${str}${this.value}${str}`);
    }
}

// Change code above this line
const builder = new StringBuilder('.');
console.log(builder.getValue()); // "."
builder.padStart('^');
console.log(builder.getValue()); // "^."
builder.padEnd('^');
console.log(builder.getValue()); // "^.^"
builder.padBoth('=');
console.log(builder.getValue()); // "=^.^="

const builder1 = new StringBuilder('432423');
console.log(builder1.getValue()); // "."
builder1.padStart('^');

class User {
    email;

    constructor(email) {
        this.email = email;
    }

    get email() {
        return this.email;
    }

    set email(newEmail) {
        this.email = newEmail;
    }
}
class Admin extends User {
    // Change code below this line
    static blacklistedEmails = [];

    static blacklist(email) {
        this.blacklistedEmails.push(email);
    }

    // static isBlacklisted(email) {
    //     return this.blacklistedEmails.includes(email);
    // }

    static AccessLevel = {
        BASIC: 'basic',
        SUPERUSER: 'superuser',
    };

    constructor({ email, accessLevel }) {
        super(email);
        this.accessLevel = accessLevel;
    }

    // Change code above this line
}

const mango = new Admin({
    email: 'mango@mail.com',
    accessLevel: Admin.AccessLevel.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.accessLevel); // "superuser"

mango.blacklist('poly@mail.com');
console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted('mango@mail.com')); // false
// console.log(mango.isBlacklisted('poly@mail.com')); // true
