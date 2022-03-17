// import { sum, mult } from './utils.js';
// console.log(sum(1, 12));
// console.log(mult(1, 12));

import calculator, { sum, mult } from './utils.js';

console.log(calculator.sum(5, 10));
console.log(sum(5, 20));

// import all named exports

import * as calc from './utils.js';

console.log(calc.sum(20, 30));