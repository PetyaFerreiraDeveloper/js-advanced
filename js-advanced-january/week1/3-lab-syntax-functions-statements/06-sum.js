function sumNumbers(n, m) {
    let firstNumber = Number(n);
    let secondNumber = Number(m);

    // let firstNumber = Math.min(Number(n), Number(m));
    // let secondNumber = Math.max(Number(n), Number(m));
    let sum = 0;
    for (let i = firstNumber; i <= secondNumber; i++) {
        sum += i;
    }
    return sum;
}

sum(3, 1)