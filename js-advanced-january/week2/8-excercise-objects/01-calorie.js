function solve(arr) {
    let obj = {};
    let arrL = arr.length

    // for (let i = 0; i < arrL; i++) {
    //     if (i % 2 == 0) {
    //         obj[arr[i]] = Number(arr[i + 1]);
    //     }
    // }

    for (let i = 0; i < arrL; i += 2) {
        let productName = arr[i];
        let calories = arr[i + 1];
        obj[productName] = Number(calories);
    }

    console.log(obj);
}

solve(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42'])