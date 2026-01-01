'use strict';
/*
const bookings = [];
const createBooking = function (flightNum, numPassengers = 1, price = 199) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');


const flight = 'LH123';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 123648567494,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 123648567494) {
    alert('checked in');
  } else {
    alert('Wrong Passport!');
  }
};

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};
newPassport(jonas);
checkIn(flight, jonas);


//FIRST-CLASS FUNCTION AND HIGHER ORDER FUNCTION
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//higher order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed String: ${fn(str)}`);
  console.log(`Transformed by; ${fn.name}`);
};
transformer('JavaScript is the best!', upperFirstWord);


const lufthansa = {
  airline: 'Lufthansa',
  iatacode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iatacode}${flightNum}`
    );

    this.bookings.push({ flight: `${this.iatacode}${flightNum}`, name });
  },
};
lufthansa.book(239, 'Jonas Schmedtmann');

const eurowings = {
  airline: 'Eurowings',
  iatacode: 'EW',
  bookings: [],
};
const book = lufthansa.book;
//functions are technically an object, hence have methhods
book.call(eurowings, 23, 'Rosie Williams');

const flightData = [456, 'Freida Gomer'];
book.call(eurowings, ...flightData);
console.log(eurowings);

//bind method
const bookEW = book.bind(eurowings);
bookEW(45, 'Leila Abdi');

//with event listeners
lufthansa.planes = 300;
lufthansa.buyPlanes = function () {
  this.planes++;
  console.log(this.planes);
};
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlanes.bind(lufthansa));

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 100));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(200));
*/

//=========================CHALLENGE #1=======================
/*
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter 'poll' object below.

Your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:

1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)

1.2. Based on the input number, update the 'answers' array property. 
For example, if the option is 3, increase the value at position 3 of the array by

    1. Make sure to check if the input is a number and if the number makes
    sense (e.g. answer 52 wouldn't make sense, right?)
    2. Call this method whenever the user clicks the "Answer poll" button.
    3. Create a method 'displayResults' which displays the poll results. The
    method takes a string as an input (called 'type'), which can be either 'string'
    or 'array'. If type is 'array', simply display the results array as it is, using
    console.log(). This should be the default option. If type is 'string', display a
    string like "Poll results are 13, 2, 4, 1".
    4. Run the 'displayResults' method at the end of each
    'registerNewAnswer' method call.

5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test
data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll
object! So what should the this keyword look like in this situation?

Test data for bonus:
§ Data 1: [5, 2, 3]
§ Data 2: [1, 5, 3, 9, 6, 1]


const poll = {
  question: ' What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(write option number)`
      )
    );
    console.log(answer);

    //register answer
    typeof answer === 'number' &&
      answer < this.options.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};
// poll.registerNewAnswer();
const register = poll.registerNewAnswer;
const answerPoll = register.bind(poll);

document.querySelector('.poll').addEventListener('click', answerPoll);

//call method creates a new this.....
poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
*/

//immediately invoked function expressions (IIFE)

(function () {
  console.log('This will never run again');
})();

(() => console.log('This will also never run again'))();

//CLOSURES
let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};
g();
f();
console.dir(f);

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);
  console.log(`Will start boarding in ${wait} seconds`);
};

boardPassengers(180, 3);
boardPassengers(240, 5);

//CHALLENGE 2
/*
This is more of a thinking challenge than a coding challenge 🤓
Your tasks:
1. Take the IIFE below and at the end of the function, attach an event listener that
changes the color of the selected h1 element ('header') to blue, each time
the body element is clicked. Do not select the h1 element again!
2. And now explain to yourself (or someone around you) why this worked! Take all
the time you need. Think about when exactly the callback function is executed,
and what that means for the variables involved in this example.
*/

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
