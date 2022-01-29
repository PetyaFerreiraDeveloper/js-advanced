function solve(input) {
    let firstElement = Number(input.shift());
    let lastElement = Number(input.pop()) || 0 // if we dont have an element, instead of returning NaN it will reutrn 0

    let sum = firstElement + lastElement
    return sum
}

let result = solve(['20', '30', '40']);
console.log(result);