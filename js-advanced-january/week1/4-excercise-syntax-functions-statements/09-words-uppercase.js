function solve(str) {
    let regEx = /[A-Za-z0-9]+/gm;
    let matches = str.match(regEx);
    let result = [];
    if (matches !== null) {
        for (let el of matches) {
            el = el.toUpperCase();
            result.push(el);
        }
    }
    console.log(result.join(", "));
}

solve("i, w 0e y");
