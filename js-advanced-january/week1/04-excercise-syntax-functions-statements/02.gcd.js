function solve(num1, num2) {
    let smallerNum = Math.min(num1, num2);
    
    let highestSoFar = 1;
    for (let i = 1; i <= smallerNum; i++) {
        if ((num1 % i === 0) && (num2 % i === 0)) {
            highestSoFar = i;
        }
    };
    console.log(highestSoFar);
}

solve(2154, 458)