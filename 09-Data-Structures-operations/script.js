'use strict';

// // Data needed for a later exercise

// const airline = 'TAP Air Portugal';

// const checkMiddleSeat = function (seat) {
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') {
//     console.log('You have got the middle seat🫢');
//   } else {
//     console.log('You got lucky 😁');
//   }
// };
// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// const passengerCorrectnName = function (passengerName) {
//   // const passengerLowerCase = passengerName.toLowerCase();
//   const passengerCorrect =
//     passengerName[0].toUpperCase() + passengerName.slice(1).toLowerCase();
//   console.log(passengerCorrect);
// };
// passengerCorrectnName('rOsIe');
// passengerCorrectnName('RAbera');

// const email = 'hello@rosie.io';
// const loginEmail = '  Hello@Rosie.io';
// const normalEmail = loginEmail.toLowerCase().trim();
// console.log(normalEmail);

// const priceGB = '220,16£';
// const priceUS = priceGB.replace('£', '$').replace(',', '.');
// console.log(priceUS);

// const announcement =
//   'All passengers come to boarding door 23, Boarding door 23';
// console.log(announcement.replaceAll('door', 'gate'));

// // SPLIT $ JOIN
// console.log('a+very+nice+string'.split('+'));
// const [firstName, lastName] = 'Rosie Rabera'.split(' ');
// const newName = ['Ms', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);
// const capitalizeName = function (name) {
//   const names = name.split(' ');
//   const capitalName = [];
//   for (const n of names) {
//     capitalName.push(n[0].toUpperCase() + n.slice(1));
//   }
//   console.log(capitalName);
// };
// capitalizeName('elvis benedict kaunda');
// capitalizeName('rosemary rabera kaunda');

// //padding-----padStart and padEnd
// const message = 'go to gate 23';
// console.log(message.padStart(20, '=').padEnd(32, '='));

// const maskCreditCard = function (number) {
//   const str = number + '';
//   const last = str.slice(-4);
//   return last.padStart(str.length, '*');
// };
// console.log(maskCreditCard('4356354284736283683'));
// console.log(maskCreditCard(6739001861762396));

// //Repeat method
// const message2 = 'Bad weather....All Departures Delayed.... ';
// console.log(message2.repeat(5));
// const planesInLine = function (n) {
//   console.log(`There are ${n} planes in line ${'🛬'.repeat(n)}`);
// };
// planesInLine(3);
// planesInLine(7);
// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
//   orderDelivery: function ({ time, address, mainIndex, starterIndex }) {
//     console.log(
//       `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },
//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(
//       `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}!`
//     );
//   },
//   orderPizza: function (mainIng, ...otherIng) {
//     console.log(mainIng);
//     console.log(otherIng);
//   },

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Sir Henry, 22',
//   mainIndex: 2,
//   starterIndex: 0,
// });

// // || && shortcuiting
// console.log('---OR---');

// console.log(3 || 'Rosie');
// console.log('' || 'Rosie');
// console.log(true || 0);
// console.log(undefined || null);

// restaurant.numGuests = 23;
// const guest1 = restaurant.numGuests || 10;
// console.log(guest1);

// console.log('---AND---');

// console.log(0 && 'Rosie');
// console.log(7 && 'Rosie');

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// // THE SPREAD OPERATOR (on the right side)
// // const arr = [7, 8, 9];
// // const newArr = [...arr, 10, 11, 12];
// // console.log(newArr);
// // console.log(...newArr);

// // // spread operator for shallow copies of array and join copies of array
// // // copy array
// // const mainMenuCopy = [...restaurant.mainMenu];

// // // join 2 arrays
// // const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// // console.log(menu);

// // // Iterables: arrays, strings, maps, sets. NOT objects
// // const str = 'Jonas';
// // const letters = [...str, ' ', 's.'];
// // console.log(letters); //['J', 'o', 'n', 'a', 's', ' ', 's.'];
// // /*
// // // real world example
// // const ingredients = [
// //   prompt("Let's make Pasta! Ingredient 1?"),
// //   prompt('Ingredient 2'),
// //   prompt('Ingeredient 3'),
// // ];
// // console.log(ingredients);
// // restaurant.orderPasta(...ingredients);
// // */

// // // objects--es18
// // const newRestaurant = { foundedIn: 2025, ...restaurant, founder: 'Rabera' };
// // console.log(newRestaurant);

// // //  THE REST OPERATOR(on the left side)
// // const [a, b, ...others] = [1, 2, 3, 4, 5];
// // console.log(a, b, others);

// /*
// // destructuring objects
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const { menu = [], starterMenu = [] } = restaurant;
// console.log(menu, starterMenu);

// // mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// // nested objects destructuring
// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);
// */

// // const arr = [2, 3, 4];
// // const a = arr[0];
// // const b = arr[1];
// // const c = arr[2];

// // const [x, y, z] = arr;
// // console.log(x, y, z);

// // const [starter, mainCourse] = restaurant.order(0, 1);
// // console.log(starter, mainCourse);

// const books = [
//   {
//     title: 'Algorithms',
//     author: ['Robert Sedgewick', 'Kevin Wayne'],
//     publisher: 'Addison-Wesley Professional',
//     publicationDate: '2011-03-24',
//     edition: 4,
//     keywords: [
//       'computer science',
//       'programming',
//       'algorithms',
//       'data structures',
//       'java',
//       'math',
//       'software',
//       'engineering',
//     ],
//     pages: 976,
//     format: 'hardcover',
//     ISBN: '9780321573513',
//     language: 'English',
//     programmingLanguage: 'Java',
//     onlineContent: true,
//     thirdParty: {
//       goodreads: {
//         rating: 4.41,
//         ratingsCount: 1733,
//         reviewsCount: 63,
//         fiveStarRatingCount: 976,
//         oneStarRatingCount: 13,
//       },
//     },
//     highlighted: true,
//   },
//   {
//     title: 'Structure and Interpretation of Computer Programs',
//     author: [
//       'Harold Abelson',
//       'Gerald Jay Sussman',
//       'Julie Sussman (Contributor)',
//     ],
//     publisher: 'The MIT Press',
//     publicationDate: '2022-04-12',
//     edition: 2,
//     keywords: [
//       'computer science',
//       'programming',
//       'javascript',
//       'software',
//       'engineering',
//     ],
//     pages: 640,
//     format: 'paperback',
//     ISBN: '9780262543231',
//     language: 'English',
//     programmingLanguage: 'JavaScript',
//     onlineContent: false,
//     thirdParty: {
//       goodreads: {
//         rating: 4.36,
//         ratingsCount: 14,
//         reviewsCount: 3,
//         fiveStarRatingCount: 8,
//         oneStarRatingCount: 0,
//       },
//     },
//     highlighted: true,
//   },
//   {
//     title: "Computer Systems: A Programmer's Perspective",
//     author: ['Randal E. Bryant', "David Richard O'Hallaron"],
//     publisher: 'Prentice Hall',
//     publicationDate: '2002-01-01',
//     edition: 1,
//     keywords: [
//       'computer science',
//       'computer systems',
//       'programming',
//       'software',
//       'C',
//       'engineering',
//     ],
//     pages: 978,
//     format: 'hardcover',
//     ISBN: '9780130340740',
//     language: 'English',
//     programmingLanguage: 'C',
//     onlineContent: false,
//     thirdParty: {
//       goodreads: {
//         rating: 4.44,
//         ratingsCount: 1010,
//         reviewsCount: 57,
//         fiveStarRatingCount: 638,
//         oneStarRatingCount: 16,
//       },
//     },
//     highlighted: true,
//   },
//   {
//     title: 'Operating System Concepts',
//     author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
//     publisher: 'John Wiley & Sons',
//     publicationDate: '2004-12-14',
//     edition: 10,
//     keywords: [
//       'computer science',
//       'operating systems',
//       'programming',
//       'software',
//       'C',
//       'Java',
//       'engineering',
//     ],
//     pages: 921,
//     format: 'hardcover',
//     ISBN: '9780471694663',
//     language: 'English',
//     programmingLanguage: 'C, Java',
//     onlineContent: false,
//     thirdParty: {
//       goodreads: {
//         rating: 3.9,
//         ratingsCount: 2131,
//         reviewsCount: 114,
//         fiveStarRatingCount: 728,
//         oneStarRatingCount: 65,
//       },
//     },
//   },
//   {
//     title: 'Engineering Mathematics',
//     author: ['K.A. Stroud', 'Dexter J. Booth'],
//     publisher: 'Palgrave',
//     publicationDate: '2007-01-01',
//     edition: 14,
//     keywords: ['mathematics', 'engineering'],
//     pages: 1288,
//     format: 'paperback',
//     ISBN: '9781403942463',
//     language: 'English',
//     programmingLanguage: null,
//     onlineContent: true,
//     thirdParty: {
//       goodreads: {
//         rating: 4.35,
//         ratingsCount: 370,
//         reviewsCount: 18,
//         fiveStarRatingCount: 211,
//         oneStarRatingCount: 6,
//       },
//     },
//     highlighted: true,
//   },
//   {
//     title: 'The Personal MBA: Master the Art of Business',
//     author: 'Josh Kaufman',
//     publisher: 'Portfolio',
//     publicationDate: '2010-12-30',
//     keywords: ['business'],
//     pages: 416,
//     format: 'hardcover',
//     ISBN: '9781591843528',
//     language: 'English',
//     thirdParty: {
//       goodreads: {
//         rating: 4.11,
//         ratingsCount: 40119,
//         reviewsCount: 1351,
//         fiveStarRatingCount: 18033,
//         oneStarRatingCount: 1090,
//       },
//     },
//   },
//   {
//     title: 'Crafting Interpreters',
//     author: 'Robert Nystrom',
//     publisher: 'Genever Benning',
//     publicationDate: '2021-07-28',
//     keywords: [
//       'computer science',
//       'compilers',
//       'engineering',
//       'interpreters',
//       'software',
//       'engineering',
//     ],
//     pages: 865,
//     format: 'paperback',
//     ISBN: '9780990582939',
//     language: 'English',
//     thirdParty: {
//       goodreads: {
//         rating: 4.7,
//         ratingsCount: 253,
//         reviewsCount: 23,
//         fiveStarRatingCount: 193,
//         oneStarRatingCount: 0,
//       },
//     },
//   },
//   {
//     title: 'Deep Work: Rules for Focused Success in a Distracted World',
//     author: 'Cal Newport',
//     publisher: 'Grand Central Publishing',
//     publicationDate: '2016-01-05',
//     edition: 1,
//     keywords: ['work', 'focus', 'personal development', 'business'],
//     pages: 296,
//     format: 'hardcover',
//     ISBN: '9781455586691',
//     language: 'English',
//     thirdParty: {
//       goodreads: {
//         rating: 4.19,
//         ratingsCount: 144584,
//         reviewsCount: 11598,
//         fiveStarRatingCount: 63405,
//         oneStarRatingCount: 1808,
//       },
//     },
//     highlighted: true,
//   },
// ];
// /*
// // assignment 1-destructuring arrays
// const [firstBook, secondbook] = books;
// const [, , thirdBook] = books;

// const ratings = [
//   ['rating', 4.19],
//   ['ratingsCount', 144584],
// ];
// const [[, a], [, b]] = ratings;
// console.log(a, b);

// const ratingStars = [63405, 1808];
// const [fiveStarRatings = 0, oneStarRatings = 0, threeStarRatings = 0] =
//   ratingStars;
// console.log(fiveStarRatings, oneStarRatings, threeStarRatings);
// */
// //SETS
// const italianFoods = new Set([
//   'pasta',
//   'gnocchi',
//   'tomatoes',
//   'olive oil',
//   'garlic',
//   'basil',
// ]);

// const mexicanFoods = new Set([
//   'tortillas',
//   'beans',
//   'rice',
//   'tomatoes',
//   'avocado',
//   'garlic',
// ]);
// const commonFoods = italianFoods.intersection(mexicanFoods);
// console.log('Intersection:', commonFoods);
// console.log([...commonFoods]);
// const ItalianMexicanFusion = italianFoods.union(mexicanFoods);
// console.log('Union:', ItalianMexicanFusion);
// const uniqueItalianFoods = italianFoods.difference(mexicanFoods);
// console.log([...uniqueItalianFoods]);
// const uniqueItalianAndMexican = italianFoods.symmetricDifference(mexicanFoods);
// console.log('SymmetricDifference:', [...uniqueItalianAndMexican]);
