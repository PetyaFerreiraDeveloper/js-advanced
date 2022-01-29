let car = {
    model: 'BMW',
    year: 2010,
    facelift: true,
    honk: function() {  // Method with function expression
        console.log(`${this.model}: beep beep`);
    },
    owner: {
        name: 'Pesho',
        age: 30,
        hobiies: [
            'sports',
            'swimming'
        ]
    },
};

car.honk(); // BMW: beep beep
car.model = 'Mercedes';
car.honk() // Mercedes: beep beep

// change execution context

let singleHonk = car.honk;
singleHonk(); // undefined: beep beep

let otherCar = {
    model: 'Lada'
}

otherCar.bibitka = car.honk;
otherCar.bibitka(); // Lada: beep beep

// Object composition

console.log(car.owner.name);
car.owner.husbant = 'Misho';
console.log(car);

// nested destructuring
let {owner: { name }} = car;

// print nested object value
console.log(car['owner']['name']);
console.log(car.owner.name);