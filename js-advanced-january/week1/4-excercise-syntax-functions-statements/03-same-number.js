function solve(num) {
    let text = num.toString();
    let bool = false;
    for (let i = 0; i < text.length - 1; i++) {
        if (text[i] !== text[i + 1]) {
            bool = true;
            break;
        }
    }
    if (bool) {
        console.log('false');
    } else {
        console.log('true');
    }
    let sum = 0;
    for (let i = 0; i < text.length; i ++) {
        sum += Number(text[i])
    }
    console.log(sum);
}

solve(888)