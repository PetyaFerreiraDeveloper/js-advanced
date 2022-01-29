function solve(arr) {
    let newArr = [];
    let sorted = arr.sort((a,b) => a - b);
    let itterations = Math.ceil(sorted.length / 2);
    for (let i = 0; i < itterations; i++) {
        let num = sorted.pop();
        newArr.unshift(num);
    }
    return newArr;
}

solve([3, 19, 14, 7, 2, 19, 6])