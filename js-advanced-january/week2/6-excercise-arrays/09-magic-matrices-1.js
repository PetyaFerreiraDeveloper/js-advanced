function solve(arr) {
    let sum = arr[0].reduce((a, b) => a + b);
    console.log(arr[0]);

    for (let i = 0; i < arr.length[0]; i++) {
        
        let currentColSum = 0;
        for ( let j = 0; j < arr.length; j++) {
            currentColSum += arr[j][i];
        }

        if (currentColSum !== sum) {
            return false;
        }
    }
    return true;
}

console.log([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
   );