class Cat {
    isHungry = true; // this is property of the object. THis is like a default

    constructor(name) { // everything we set here can be set dynamically
        this.name = name;
        
    }

    makeSound() {
        console.log(`${this.name}:Meaw`);
    }
}

let firstCat = new Cat('Navcho');
let secondCat = new Cat('Gari');

console.log(firstCat);
console.log(firstCat.name);
console.log(secondCat.name);
firstCat.makeSound()
secondCat.makeSound()

// Second example

let catNames = ['Navi', 'Mishi', 'Sisa', 'Zuza'];

let cats = catNames.map(x => new Cat(x));
console.log(cats[1]);

cats.forEach(x => x.makeSound());

// instance of Operator

console.log(firstCat instanceof Cat);
console.log(firstCat instanceof Object);


// Static Members

class Dog {
    static legNumber = 4; // static property
    isHungry = true; // this is property of the object. THis is like a default

    constructor(name) { // everything we set here can be set dynamically
        this.name = name;
        
    }

    makeSound() {
        console.log(`${this.name}:Bau`);
    }

    static vetCheck() { // static method: these methods are specific for the whole class, and not for each instance
        if (dog.isHungry) {
            console.log('this dog should be fed');
        }
    }
}

let dog = new Dog('Harry');
dog.makeSound();
Dog.vetCheck(dog);
console.log(Dog.legNumber);

class Circle {
    #pi = Math.PI; // private property - it can only be called from the inside.

    constructor(radius) {
        this.radius = radius;
        
    }
}