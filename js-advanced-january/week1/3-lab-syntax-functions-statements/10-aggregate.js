function solve(arr) {
    arr = arr.map(el => Number(el))
    let sum = 0;
    let sumInverse = 0;
    let str = '';
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        sumInverse += 1 / arr[i];
        str += arr[i];
    }
    console.log(sum);
    console.log(sumInverse);
    console.log(str);
}

solve([2, 4, 8, 16])