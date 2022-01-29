function solve(arr) {
    console.log(arr[0]);
    let sum = arr[0].reduce((a, b) => a + b);
    console.log(sum);
}

solve([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
   )