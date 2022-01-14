function solve(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            newArr.push(arr[i][j])
        }
    }
    let sorted = newArr.sort((a,b) => a - b);
    let biggest = sorted.pop();
    return biggest;
}

solve([[20, 50, 10],
    [8, 33, 145]]
   )