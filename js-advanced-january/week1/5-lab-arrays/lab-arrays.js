// Array destructuring Assignment syntaxis
let names = ['Gosho', 'Pesho', 'Mima','Lili']
//let [firstname, secondName, thirdName] = names;

// rest operator

let [firstname, secondName, ...others] = names;
console.log(others);

let cars = ['Bmw', 'Mercedes'];
cars.push(...['toyota', 'renault']);
console.log(cars);

// how to print when judge wants a return
function solve(input) {
    let firstElement = Number(input.shift());
    let lastElement = Number(input.pop()) || 0 // if we dont have an element, instead of returning NaN it will reutrn 0

    let sum = firstElement + lastElement;
    return sum;
};

let result = solve(['20', '30', '40']);
//console.log(result);

// Reverse
let carsReversed = cars.reverse() // mutating function
console.log(carsReversed);
console.log(cars);

// Sort -it sorts by the ASCII table
// let sorted = cars.sort() // mutaing function
// console.log(sorted);
// console.log(cars);

let numbers = [2, 5, 10, 3]; // again sorts by the ASCII table
console.log(numbers.sort());

// Numbers sort
let nums = [20, 40, 30, 5, 70, 55];

let sortedNums = nums.sort((a, b) => a - b);
console.log(sortedNums);

// Alphabetical sort

let sortedCars = cars.sort((a, b) => a.localeCompare(b));
console.log(sortedCars);

// concat - creates new arr
let arr = ['monkey', 'dog', 'cat'];
let all = arr.concat(cars);
console.log(all);

// slice - it copies part of the array

let newArr = all.slice(2, 4);
let clonedArr = all.slice();

// ARRAY ITTERATION METHODS
// for of
let animals = ['dog', 'cat', 'mouse', 'monkey']

for (let el of animals) {
    console.log(el);
}

// For Each Method

animals.forEach((animal) => {
    console.log(animal);
});


// Some - it will return true if there is at least one true result
let resultAnimal = animals.some((animal) => {
    return animal[0] == 'd';
})
console.log(resultAnimal);


// Find

let foundAnimal = animals.find((animal) => {
    return animal.length > 5;
});

console.log(foundAnimal);

// Filter - creates a new array with all elements followind a condition

let filteredAnimals = animals.filter(animal => animal.length == 3);
console.log(filteredAnimals);
console.log(animals);


// Map

let numse = [1, 2, 3, 4, 5];
let doubledNums = numse.map(num => num * 2);
let upperCaseAnimal = animals.map(animal => animal.toUpperCase());
console.log(numse);
console.log(doubledNums);
console.log(upperCaseAnimal);


// Reduce - take an array and produce a result

let summedNumse = numse.reduce((accumulator, num) => {
    return accumulator + num;
}, 0);
console.log(summedNumse);

let data = [1, 5, 8, 3];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(data.reduce(reducer));
console.log(data.reduce(reducer, 5));

// slice

let arrSlicer = ['cc', 'aaa', 'bb', 1,2,3,4,5]
let copy = arrSlicer.slice(0);
console.log(copy);
let arrSliced = arrSlicer.slice(0, 3);
console.log(arrSliced);
console.log(arrSlicer);
