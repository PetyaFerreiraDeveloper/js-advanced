function random() {
    console.log(this); // this == window will return true when the function is excuted globally like below in the browser
    return Math.random()
}

// global invocation
random() // this will point at WINDOW when executed in the browser
// if the function is executed in nodejs this will return global

globalThis // globalThis == Window in the browser, globalThis == global in nodejs

// Object context

let obj = {
    name: 'Peter',
    greet() {
        console.log(`hello my name is ${this.name}`);
    }
}

obj.greet(); // method invocation - here this will point at the object itself

// DOM Element - must execute in browser

// element.addEventListener('click', function() {
//     e.preventDafault() // to prevent that a link would open
//     console.log(this) // this will point at the element itself
// })

// nested functions - they do not change the context- because this only depends on how the function is invoked

function a() {
    function b() {
        function c() {
            function d() {

            }
            d();
        }
        c()
    }
    b()
}

a()

// arrow functions use the context of the parent

// const person = {
//     firstName: 'Pesho',
//     introduce() {
//         const getFullName = () => {
//               return (`Hello my name is ${getFullName()}`)
//         }
//     }
// }

// explicit binding
// call()
// apply()

// bind()

// changing the context with call() and apply()

function introduce() {
    console.log(`hello my name is ${this.name}`);
}

introduce()

let objTest = {
    name: 'pesho',
    introduce,
}

let person = {
    name: 'pesho'
}

introduce.call(person); // we give that we want the context of the function to be person object - invoke using call()

introduce.apply(person); // if only context is given apply and call work the same way

// if the function had arguments call() - can take arguments after the context
// if the function had arguments apply() takes an array as a second argument. 

// invoke a function with bind

let superHuman = {
    name: 'Superman'
}

function introduceTo(firstName, lastName) {
    console.log(`hello ${firstName} ${lastName} my name is ${this.name}`);
}

let superIntroduction = introduceTo.bind(superHuman, 'Maria', 'Petrova'); // returns new function

superIntroduction();