function solve(arr) {
    let sorted = arr.sort((a, b) => a - b);
    let newArr = [];
    let first = sorted.shift();
    newArr.push(first);
    let second = sorted.shift();
    newArr.push(second);
    console.log(newArr.join(' '));
}

solve([3, 0, 10, 4, 7, 3])