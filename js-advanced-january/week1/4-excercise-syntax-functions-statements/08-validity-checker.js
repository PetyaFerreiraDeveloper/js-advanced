function solve(num1, num2, num3, num4) {
    let xInit = 0;
    let yInit = 0;
    let x1 = Number(num1);
    let y1 = Number(num2);
    let x2 = Number(num3);
    let y2 = Number(num4);
    
    let firstCalc = Math.sqrt(Math.pow((x1 - xInit), 2) + Math.pow((y1 - yInit), 2));
    let secondCalc = Math.sqrt(Math.pow((x2 - xInit), 2) + Math.pow((y2 - yInit), 2));
    let thirdCalc = Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));

    let firstResult = '';
    let secondResult = '';
    let thirdResult = '';

    if (firstCalc % Math.floor(firstCalc) === 0 || firstCalc === 0) {
        firstResult = 'valid';
    } else {
        firstResult = 'invalid';
    }

    if (secondCalc % Math.floor(secondCalc) === 0 || secondCalc === 0) {
        secondResult = 'valid';
    } else {
        secondResult = 'invalid';
    }

    if (thirdCalc % Math.floor(thirdCalc) === 0 || thirdCalc === 0) {
        thirdResult = 'valid';
    } else {
        thirdResult = 'invalid';
    }

    console.log(`{${x1}, ${y1}} to {${xInit}, ${yInit}} is ${firstResult}`);
    console.log(`{${x2}, ${y2}} to {${xInit}, ${yInit}} is ${secondResult}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${thirdResult}`);
}

solve(1, 1, 1, 1)