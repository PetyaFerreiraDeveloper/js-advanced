// with the require key word I import whatever is 
// exported from the file .calc-module and I save it in
// a const called calculator or whatever other name I decide

const calculator = require('./calc-module');

console.log(calculator(2,3));