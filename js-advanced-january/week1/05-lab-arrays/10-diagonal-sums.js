function solve(arr) {
    let newArr = [];
    let mainSum = 0;
    let secondarySum = 0;
    let l = arr.length - 1;
    for ( let i = 0; i <= l; i++) {
        mainSum += arr[i][i];
        secondarySum += arr[i][l - i]
    }
    newArr.push(mainSum);
    newArr.push(secondarySum);
    console.log(newArr.join(' '));
}

solve([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
   
   )