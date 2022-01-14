function solve(arr) {
    let newArr = [];
    for (let num of arr) {
        if (num < 0) {
            newArr.unshift(num)
        } else {
            newArr.push(num)
        }
    }
    newArr.forEach(num => console.log(num));
}

solve([7, -2, 8, 9])