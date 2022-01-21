function solve(arr) {
    let finalArr = [];
    arr.shift();

    for (let el of arr) {
        let keys = el.split("|");
        let newArr = [];
        for (let i = 1; i < 4; i++) {
            newArr.push(keys[i].trim());
        }

        let obj = {
            Town: newArr[0],
            Latitude: Number(Number(newArr[1]).toFixed(2)),
            Longitude: Number(Number(newArr[2]).toFixed(2)),
        };
        finalArr.push(obj);
    }
    console.log(JSON.stringify(finalArr));
}

solve([
    "| Town | Latitude | Longitude |",
    "| Veliko Turnovo | 43.0757 | 25.6172 |",
    "| Monatevideo | 34.50 | 56.11 |",
]);
