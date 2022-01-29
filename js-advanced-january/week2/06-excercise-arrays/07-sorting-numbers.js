function solve(arr) {
    let newArr = [];
    let sorted = arr.sort((a, b) => a - b);
    while (sorted.length > 0) {
        let min = sorted.shift();
        newArr.push(min);
        let max = sorted.pop();
        newArr.push(max)
    }
    return newArr;
}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])