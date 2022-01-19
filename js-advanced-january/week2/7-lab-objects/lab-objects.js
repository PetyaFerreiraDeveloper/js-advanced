const person = {
    firstName: 'Petya',
    lastName: 'Ferreira',
    age: 39
};

// Dynamic assign of properties
let emptyObj = {};

let propName = 'age';

emptyObj.name = 'Pleven'; // dot notation
emptyObj.population = 25000;
emptyObj[propName] = 300; // bracket notation - we use the brackets if we want to use variable
emptyObj['job-title'] = 'analyst' // use bracket notation when property is more than one words or have a special symbol

function city(city, population) {
    let record = {city, population};
    return record;
}

city('Sofia', 3000);

// access object properties

console.log(emptyObj.age);
console.log(emptyObj['job-title']);


// Object destructuring assignment syntax. it takes them as separate variables with their own references
let {age, population, ...rest} = emptyObj;
console.log(rest);

// object references

let otherObj = emptyObj; // this is copying the reference of the object
otherObj.name = 'Garry';
console.log(otherObj.name);
console.log(emptyObj.name);

// clone object
let {...clonedObj} = emptyObj;


// asociative array

let phones = {
    'ivan': 2536,
    'petya': 564646
}

console.log(phones['ivan']);
phones['ivan'] = 56566;

// Itteration
for (let key in phones) {
    console.log(key);
    console.log(phones[key]);
}

let entries = Object.entries(phones);
for (let entry of entries) {
    console.log(entry);
}