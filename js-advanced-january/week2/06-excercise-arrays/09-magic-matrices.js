function solve(arr) {
    let newArr = [];
    let bool = true;
    for (let i = 0; i < arr.length; i++) {
        let reducer = (acc, el) => acc + el;
        let sumRow = arr[i].reduce(reducer);
        newArr.push(sumRow);
        let sumCol = 0;
        for (let j = 0; j < arr.length; j++) {
            sumCol += arr[j][i];
        }
        newArr.push(sumCol)
    }
    for (let i = 0; i < newArr.length - 1; i++) {
        if (newArr[i] !== newArr[i+1]) {
            bool = false;
            console.log(bool);
            break;
        }
    }
    if (bool) {
        console.log(true);
    }
}

solve([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
   )