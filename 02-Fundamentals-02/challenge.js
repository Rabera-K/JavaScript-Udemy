"use strict";
/*
const calcAverage = (a, b, c) => (a + b + c) / 3;
const scoreDolphins = calcAverage(44, 23, 71);
console.log(scoreDolphins);
const scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreKoalas);

function checkWinner(dolphins, koalas) {

    if (dolphins >= 2 * koalas) {
        console.log(`Dolphins win (${dolphins} vs. ${koalas})`);
    } else if (koalas >= 2 * dolphins) {
        console.log(`Koalas win (${koalas} vs. ${dolphins})`)
    } else {
        console.log('No team wins!');
    }

}

checkWinner(scoreDolphins, scoreKoalas);
*/

/*
function calcTip(billValue) {
    if (billValue >= 50 && billValue <= 300) {
        return billValue * 0.15;
    } else {
        return billValue * 0.2;
    }
}

console.log(calcTip(100));

const bills = [125, 555, 44];
// const tip1 = calcTip(bills[0])

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[bills.length - 1])];
console.log(tips);

const total = [tips[0] + (bills[0]), tips[1] + (bills[1]), tips[tips.length - 1] + (bills[2])];
console.log(total);
*/

/*
// challenge #3
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }

};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }

}
console.log(mark.calcBMI(), john.calcBMI());

console.log(`${mark.bmi > john.bmi ? mark.fullName : john.fullName}'s BMI (${mark.bmi > john.bmi ? mark.bmi : john.bmi}) is higher than ${mark.bmi < john.bmi ? mark.fullName : john.fullName}'s (${mark.bmi < john.bmi ? mark.bmi : john.bmi})!`);
*/

// challenge 4
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (bills) {
  return bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;
};

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + tips[i]);
}

console.log(totals);
console.log(tips);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum / arr.length;
};

console.log(calcAverage(bills));
console.log(calcAverage(tips));
console.log(calcAverage(totals));
