'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive :D');

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

/*
//Methods
const rosie = {
    firstName: 'Rosie',
    lastName: 'Rabera',
    birthYear: 2000,
    job: 'teacher',
    friends: ['Jane', 'Violet', 'Victor'],

    calcAge: function () {
        this.age = 2025 - this.birthYear;
        return this.age;
    }
};

console.log(rosie.lastName);

rosie.location = 'Nairobi';
rosie['instagram'] = '@raberaDesigns';
rosie.hasDriversLicense = false;


console.log(rosie);
console.log(rosie.calcAge());
console.log(rosie.age);

// "Rosie has 3 friends, and her best friend is called Jane"

console.log(`${rosie.firstName} has ${rosie.friends.length} friends, and her best friend is called ${rosie.friends[0]}`);
console.log(`${rosie.firstName} is a ${rosie.calcAge()} years old ${rosie.job}, and she has ${rosie.hasDriversLicense ? 'a' : 'no'} driver's license.`);
*/

// for loop keeps running while condition is TRUE

for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition 1🏋️`);
};

const rosie = [
    'Rosie',
    'Rabera',
    2000,
    'teacher',
    ['Jane', 'Violet', 'Victor'],
]
console.log(rosie);

for (let i = 0; i < rosie.length; i++) {
    console.log(rosie[i], typeof rosie[i]);
}

const years = [1991, 2000, 2003, 2011, 1978];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2025 - years[i]);
}
console.log(ages);

// for (let exercise = 1; exercise <= 3; exercise++) {
//     console.log(`-----------Starting exercise ${exercise}⌚`);

//     for (let rep = 1; rep <= 5; rep++) {
//         console.log(`exercise ${exercise}: Lifting weights repetition ${rep}🏋️`);
//     };
// }

let dice = Math.trunc(Math.random() * 6) + 1;


while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end...');
};
