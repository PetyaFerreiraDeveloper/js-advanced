// we can not call the function before it is created if we create it inside of variable

let intro = function() {
    console.log('hi');
};

intro();

// hoisting - when we can call a function before it has been created. We must create it with the function key word

// intro1()

function intro1() {
    console.log('this is intro1');
}

intro1()