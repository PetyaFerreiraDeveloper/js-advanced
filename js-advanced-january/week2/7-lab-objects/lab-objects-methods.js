

let car = {
    model: 'BMW',
    year: 2010,
    facelift: true,
    honk: function() {  // Method with function expression
        console.log('Beep beep');
    },
    honk2: () => { // Method with arrow function
        console.log('Bip2');
    },
    honk3() { // Object method notation
        console.log('Beep3');
    }
};

car.honk();
car.honk2();
car.honk3();

// Objects as function library
function division(a, b) {
    return a / b;
}
let calc = {
    sum: function(a, b) {
        return a+ b;
    },
    mulitplication: (a, b) => a * b,
    subtraction(a,b) {
        return a - b
    },
    division, // same as division: division
}

console.log(calc.sum(10, 15));