/*
let country = "Kenya";
let continent = "Africa";
let population = 60000000;

console.log(country);
console.log(continent);
console.log(population);

let isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof country);
console.log(typeof population);
console.log(typeof language);
*/

let massMark = 78;
let massJohn = 92;
let heightMark = 1.69;
let heightJohn = 1.95;

let BMIMark = massMark / (heightMark * heightMark);
let BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

let markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);

if (BMIMark > BMIJohn) {
    console.log("Mark's BMI is higher than John's!");
} else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's BMI (${BMIMark})!`);
}

massMark = 95;
massJohn = 85;
heightMark = 1.88;
heightJohn = 1.76;

BMIMark = massMark / (heightMark * heightMark);
BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);

if (BMIMark > BMIJohn) {
    console.log("Mark's BMI is higher than John's!");
} else {
    console.log(`John's BMI ${BMIJohn} is higher than Mark's BMI ${BMIMark}!`);
};

/*
Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks 😉
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
GOOD LUCK
*/
let DolphinsScore1 = 97;
let DolphinsScore2 = 112;
let DolphinsScore3 = 101;

let KoalasScore1 = 109;
let KoalasScore2 = 95;
let KoalasScore3 = 106;


const scoreDolphins = (DolphinsScore1 + DolphinsScore2 + DolphinsScore3) / 3;
console.log(scoreDolphins);
const scoreKoalas = (KoalasScore1 + KoalasScore2 + KoalasScore3) / 3;
console.log(scoreKoalas);
const minimumScore = 100;
const drawScores = scoreDolphins === scoreKoalas;
console.log(drawScores);


if (scoreDolphins > scoreKoalas && scoreDolphins >= minimumScore) {
    console.log("Dolphins win the trophy!🥳");
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= minimumScore) {
    console.log("Koalas win the trophy!🥳");
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= minimumScore) {
    console.log("Both win the trophy!🥳🥳");
} else {
    console.log("No team wins the trophy 😞");
}



// const bill = 275;
// if (bill >= 50 && bill <= 300) {
//     tip = bill * 0.15;
//     console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
// } else {
//     tip = bill * 0.2;
//     console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
// }
const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${tip + bill}`);
// bill >= 50 && bill <= 300 ? console.log(`The bill was ${bill}, the tip was ${bill * 0.15}, and the total value ${bill + (bill * 0.15)}`) :
//     console.log(`The bill was ${bill}, the tip was ${bill * 0.2}, and the total value ${bill + (bill * 0.2)}`);

