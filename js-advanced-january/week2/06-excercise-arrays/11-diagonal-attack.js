function solve(arr) {
    let newArr = arr.map((line) => line.split(" ").map((el) => Number(el)));
    let mainDiagSum = 0;
    let secondaryDiagSum = 0;
    let l = newArr.length;
    for (let i = 0; i < l; i++) {
        mainDiagSum += newArr[i][i];
        secondaryDiagSum += newArr[i][l - 1 - i];
    }
    if (mainDiagSum === secondaryDiagSum) {
        for (let i = 0; i < l; i++) {
            for (let j = 0; j < l; j++) {
                if (i === j || i + j === l - 1) {
                    continue;
                } else {
                    newArr[i][j] = mainDiagSum;
                }
            }
        }
    }
    for (let row of newArr) {
        console.log(row.join(" "));
    }
}

solve(["1 1 1", "1 1 1", "1 1 0"]);
