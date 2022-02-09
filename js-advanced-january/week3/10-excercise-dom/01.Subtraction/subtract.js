function subtract() {
    let firstNumEl = document.getElementById('firstNumber');
    let secondNumEl = document.getElementById('secondNumber');
    let resultEl = document.getElementById('result');
    let firstNum = Number(firstNumEl.value);
    let secondNum = Number(secondNumEl.value);
    let result = firstNum - secondNum;
    resultEl.textContent = result;
}