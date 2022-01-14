function solve(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === arr[i][j+1]) {
                sum++;
            }
            if ((i + 1) < arr.length) {

                if (arr[i][j] === arr[i+1][j]) {
                    sum++;
                }
            }
        }
    }
    return sum;
}

solve([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]

)