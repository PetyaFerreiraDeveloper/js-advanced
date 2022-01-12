function sumNumbers(n, m) {
    let firstNumber = Number(n);
    let secondNumber = Number(m);

    let sum = 0;
    for (let i = firstNumber; i <= secondNumber; i++) {
        sum += i;
    }
    
    return sum;
}

sumNumbers(3, 1)