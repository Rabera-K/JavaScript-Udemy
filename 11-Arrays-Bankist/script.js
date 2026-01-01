'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  type: 'premium',
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  type: 'standard',
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  type: 'premium',
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  type: 'basic',
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${mov}€</div>
        </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
// displayMovements(account1.movements);

//DISPLAYS

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, cur) => acc + cur, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

// calcDisplayBalance(account1.movements);

//summaryyy
const calcDisplaySummary = function (acc) {
  const income = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumIn.textContent = `${income}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};
// calcDisplaySummary(account1.movements);

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

// const user = 'Steven Thomas Williams';

createUsernames(accounts);

const updateUI = function (acc) {
  displayMovements(acc.movements);
  //display summary
  calcDisplaySummary(acc);
  //display balance
  calcDisplayBalance(acc);
};

let currentAccount;
//event listeners
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //display UI and welcome message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    //clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    //display movements
    //updateUI
    updateUI(currentAccount);
  }
});

//loannnn
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    //add positiove movement
    currentAccount.movements.push(amount);

    //updateUI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

//close account
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );

    //delete account
    accounts.splice(index, 1);

    //hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});
//transferss
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    //update the UI
    updateUI(currentAccount);
  }
});
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});
// console.log(accounts);
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
/*
let arr = ['a', 'b', 'c', 'd', 'e'];

//slice method does not mutate the original array
console.log(arr.slice(2));
console.log(arr);
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));

//splice method mutates the array.
console.log(arr.splice(2));
console.log(arr);

//reverse...mutates the array
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());

//concat
const letters = arr.concat(arr2);
console.log(letters);

//join
console.log(letters.join('-'));


//the new at method
const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

//getting last array element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));


//forEach method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You have deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You have withdrawn ${Math.abs(mov)}`);
  }
});

//forEach with maps and sets

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

//map
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

//set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}:${value}`);
});
*/
//===========CHALLENGE #1=========
/*
Create a function 'checkDogs', which accepts 2 arrays of dog's ages
('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the first and the last two dogs actually have
cats, not dogs! So create a shallow copy of Julia's array, and remove the cat
ages from that copied array (because it's a bad practice to mutate function
parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1
is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy
🐶
")
4. Run the function for both test datasets
Test data:
§ Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
§ Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
Hints: Use tools from all lectures in this section so far 😉

const checkDogs = function (dogsJulia, dogsKate) {
  let dogsJuliaNew = dogsJulia.slice();
  dogsJuliaNew.splice(0, 1);
  dogsJuliaNew.splice(-2);

  console.log(dogsJuliaNew);
  const dogs = dogsJuliaNew.concat(dogsKate);
  console.log(dogs);

  dogs.forEach(function (age, i) {
    if (age >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${age} years old`);
    } else if (age < 3) {
      console.log(`Dog number ${i + 1} is still a puppy 🐶`);
    }
  });
};
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);




// const movementToUsd = movements.map(function (mov) {
//   return mov * eurToUsd;
// });
const movementToUsd = movements.map(mov => mov * eurToUsd);
console.log(movements);
console.log(movementToUsd);

// const movementsToUsdFor = [];
// for (const mov of movements) movementsToUsdFor.push(mov * eurToUsd);
// console.log(movementsToUsdFor);

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You have ${
      mov > 0 ? 'deposited' : 'withdrawn'
    } ${Math.abs(mov)}`
);
console.log(movementsDescriptions);
*/
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const deposits = movements.filter(mov => mov > 0);
// console.log(deposits);
// const withdrawals = movements.filter(mov => mov < 0);
// console.log(withdrawals);

//reduce method
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   return acc + cur;
// }, 0);
// console.log(balance);
// const max = movements.reduce(
//   (acc, cur) => (acc > cur ? acc : cur),
//   movements[0]
// );
// console.log(max);

// const calcAverageHumanAge = function (ages) {
//   const humanYears = ages.map(function (age) {
//     return age <= 2 ? age * 2 : 16 + age * 4;
//   });
//   console.log(humanYears);
//   const dogsAt18 = humanYears.filter(function (age) {
//     return age > 18;
//   });
//   console.log(dogsAt18);

//   const averageDogYears =
//     dogsAt18.reduce((acc, cur) => acc + cur, 0) / dogsAt18.length;

//   console.log('average years:', averageDogYears);
// };
// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

const calcAverageHumanAge = ages =>
  ages
    .map(age => (age <= 2 ? age * 2 : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);

const eurToUsd = 1.1;
const totatalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, cur) => acc + cur, 0);
console.log(totatalDepositsUSD);

console.log(movements);
const lastWithdrawal = movements.findLast(mov => mov < 0);
console.log(lastWithdrawal);

//findLast
// const latestLargeMovementIndex = movements.findLastIndex(
//   mov => Math.abs(mov) > 1000
// );
// console.log(latestLargeMovementIndex);
// console.log(
//   `Your latest large movement was ${
//     movements.length - latestLargeMovementIndex
//   } movements ago`
// );
//every
const arr = [[1, 2, 3], 4, 5, [6, 7, 8]];
console.log(arr.flat());
const arrDeep = [
  [1, [2, 3], 4, 5],
  [6, [7, 8]],
];
console.log(arrDeep.flat(2));

// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);
// const allMovements = accountMovements.flat();
// console.log(allMovements);
// const overallBalance = allMovements.reduce((acc, cur) => acc + cur, 0);

const overallBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, cur) => acc + cur, 0);
console.log(overallBalance);

//flatMap
const overallBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, cur) => acc + cur, 0);
console.log(overallBalance2);

/*
//CHALLENGE 4

const breeds = [
  {
    breed: 'German Shepherd',
    averageWeight: 32,
    activities: ['fetch', 'swimming'],
  },
  {
    breed: 'Dalmatian',
    averageWeight: 24,
    activities: ['running', 'fetch', 'agility'],
  },
  {
    breed: 'Labrador',
    averageWeight: 28,
    activities: ['swimming', 'fetch'],
  },
  {
    breed: 'Beagle',
    averageWeight: 12,
    activities: ['digging', 'fetch'],
  },
  {
    breed: 'Husky',
    averageWeight: 26,
    activities: ['running', 'agility', 'swimming'],
  },
  {
    breed: 'Bulldog',
    averageWeight: 36,
    activities: ['sleeping'],
  },
  {
    breed: 'Poodle',
    averageWeight: 18,
    activities: ['agility', 'fetch'],
  },
];
//task 1
const huskyWeight = breeds.find(dog => dog.breed === 'Husky')?.averageWeight;

console.log(huskyWeight);

//task 2
const nameOfBreed = breeds.find(
  dog => dog.activities.includes('running') && dog.activities.includes('fetch')
)?.breed;

console.log(nameOfBreed);

//task 3
const allActivities = breeds.flatMap(dog => dog.activities);
console.log(allActivities);

//task 4
const uniqueActivities = [...new Set(allActivities)];
console.log(uniqueActivities);

//task5
const swimmingAdjacent = [
  ...new Set(
    breeds
      .filter(dog => dog.activities.includes('swimming'))
      ?.flatMap(dog => dog.activities)
  ),
].filter(act => act !== 'swimming');

console.log(swimmingAdjacent);

//task 6
console.log(breeds.every(dog => dog.averageWeight >= 10));

//task 7
console.log(breeds.some(dog => dog.activities.length >= 3));

//task bonus
const aveTopWeight = breeds
  .filter(dog => dog.activities.includes('fetch'))
  ?.flatMap(dog => dog.averageWeight);
console.log(Math.max(...aveTopWeight));
*/

//sorting
console.log(movements);

//ascending
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// })
// movements.sort((a, b) => a - b);
// console.log(movements);

// movements.sort((a, b) => b - a);
// console.log(movements);

//array grouping

const groupedMovements = Object.groupBy(movements, mov =>
  mov > 0 ? 'deposits' : 'withdrawals'
);
console.log(groupedMovements);

const groupByActivity = Object.groupBy(accounts, acc => {
  const movementCount = acc.movements.length;
  if (movementCount >= 8) return 'very active';
  if (movementCount >= 4) return 'active';
  if (movementCount >= 1) return 'moderate';
  return 'inactive';
});
console.log(groupByActivity);
// const groupedAccounts = Object.groupBy(accounts, account => account.type);
const groupedAccounts = Object.groupBy(accounts, ({ type }) => type);
console.log(groupedAccounts);

//creating and filling arrays
const x = new Array(7);
console.log(x); //an array of length 7 but with empty spaces

x.fill(1);
console.log(x); //fills the array with 1 on all spaces
x.fill(2, 3, 6);
console.log(x); // fills the array with 2 from position 3 to 6

//Array.from

const y = Array.from({ length: 7 }, () => 3);
console.log(y); // works the same as new Array + .fill.

//create an array 1,2,3,4,5,6,7
const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => el.textContent.replace('€', '')
  );

  console.log(movementsUI);
});

//non-destructive alternatives:  toReversed, toSorted, toSpliced, with

////////////////////////////////
//array practice
//1.
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(dep => dep > 0)
  .reduce((acc, cur) => acc + cur, 0);

console.log(bankDepositSum);

//2.deposits with atleast $1000
// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000).length;

const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? count + 1 : count), 0);

console.log(numDeposits1000);

//3.
const sums = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (acc, cur) => {
      // cur > 0 ? (acc.deposits += cur) : (acc.withdrawals += cur);
      acc[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
      return acc;
    },
    { deposits: 0, withdrawals: 0 }
  );
console.log(sums);

//4.
// using reduce to title case a string with exceptions eg...
//this is anice title- This Is a Nice Title
const convertTitleCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);

  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalize(word)))
    .join(' ');

  return capitalize(titleCase);
};
console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));

/////////
//CHALLENGE 5
console.log('==========CHALLENGE 5==========');
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John', 'Leo'] },
  { weight: 18, curFood: 244, owners: ['Joe'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

//task 1
dogs.forEach(dog => (dog.recFood = Math.floor(dog.weight ** 0.75 * 28)));
console.log(dogs);

//task 2
const SarahDog = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(SarahDog);
console.log(
  `Sarah's dog is eating  ${
    SarahDog.curFood > SarahDog.recFood ? 'too much' : 'too little'
  }`
);
//task 3
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recFood)
  .flatMap(dog => dog.owners);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recFood)
  .flatMap(dog => dog.owners);
console.log('Owners with dogs eating too much:', ownersEatTooMuch);
console.log('Owners with dogs eating too little:', ownersEatTooLittle);

//task 4
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much `);

//task 5
console.log(dogs.some(dog => dog.curFood === dog.recFood));

//task 6
console.log(
  dogs.every(
    dog => dog.curFood <= 1.1 * dog.recFood && dog.curFood >= 0.9 * dog.recFood
  )
);

//task 7
const okayFood = dogs.filter(
  dog => dog.curFood <= 1.1 * dog.recFood && dog.curFood >= 0.9 * dog.recFood
);
console.log(okayFood);

//task 8
const groupDogByRecFood = Object.groupBy(dogs, dog => {
  if (dog.curFood === dog.recFood) return 'exact';
  if (dog.curFood > dog.recFood) return 'too-much';
  if (dog.curFood < dog.recFood) return 'too-little';
});

console.log(groupDogByRecFood);

//task 9
const groupByNumOwners = Object.groupBy(dogs, dog => {
  const numOwners = dog.owners.length;
  return `${numOwners} Number of owners`;
});
console.log(groupByNumOwners);

//task 10
const recFoodOrder = dogs.toSorted((a, b) => a.recFood - b.recFood);

console.log(recFoodOrder);
