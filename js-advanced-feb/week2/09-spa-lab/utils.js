
// named export - if i want to import it i must use the same name
export const sum = function(a, b) {
    return a + b;
}

export const mult = function(a, b) {
    return a * b;
}

// default export - the name does not matter, i can import it with whatever name i want
const calc = {
    sum,
    mult
};

export default calc;