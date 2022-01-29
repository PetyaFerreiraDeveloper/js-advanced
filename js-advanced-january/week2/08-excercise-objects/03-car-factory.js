function solve(obj) {

    let car = {};
    let engine = {};
    let carriage = {};
    let wheels = [];
    wheels.length = 4;

    car.model = obj.model;

    if (obj.power <= 90) {
        engine.power = 90;
        engine.volume = 1800;
    } else if (obj.power <= 120) {
        engine.power = 120;
        engine.volume = 2400;
    } else if (obj.power <= 200) {
        engine.power = 200;
        engine.volume = 3500;
    }

    car.engine = engine;

    carriage.type = obj.carriage;
    carriage.color = obj.color;

    car.carriage = carriage;

    let wheelSize = 0;
    if (obj.wheelsize % 2 == 0) {
        wheelSize = obj.wheelsize - 1;
    } else {
        wheelSize = obj.wheelsize;
    }
    wheels.fill(wheelSize, 0, 5)
    car.wheels = wheels;

    return car;

}

const print = solve({ model: 'Opel Vectra',
  power: 110,
  color: 'grey',
  carriage: 'coupe',
  wheelsize: 17 }

);

console.log(print);