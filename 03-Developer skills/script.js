// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const x = 23;
console.log(x);
const calcAge = (birthyear) => 2025 - birthyear;
console.log(calcAge(2000));
/*
// Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up
into sub-problems!
Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]
*/

// 1. Understand the problem
// for each value in the array,
//  you add the celcius symbol
// and a string displaying it's array position as days.
// loop through the array,
// each value is then converted to the string,
// how do you convert an array to a string?
// convert to a string and add an element to it(modify the array)

// 2.break into smaller parts
//take the array and convert it or modify using .map method.
// then further modify it by using join and (...) separator
// then console.log but with template literal
const data1 = [17, 21, 23];

const printForecast = function (arr) {
    const arrModified = arr.map(x=> 'x' + )
};
