// A function should do 
// 1. what its name suggests
// 2. or indicate a problem
// Any other behavior is incorrect

// a function failed to do what its name suggest should:
// 1. return a special value: undefined, falde, -1
// 2. throw an exception/ error

function getNumber() {
    let randomNumber = Math.random();
    if (0.1 < 0.5) {
        // throw new Error('your number is too low');
        throw {
            message: 'your number'
        }
    }

    return Math.floor(randomNumber * 100)
}

function app() {
    try {
        let number = getNumber(); 
        console.log(number);
    } catch(err) {
        console.log(err.stack);
    } finally {
        console.log('always print');
    }
}

app()

// modules - a set of functions or values to included in applications. They are grouped by related behavior

// commonJS - Node.Js module system
// es6modules

// require is uded to import modules
const http = require('http'); // core module fro npm packages

const myModule = require('./myModule.js'); // for internal modules

