function solve(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 !== 0) {
            newArr.push(arr[i])
        }
    }
    let doubled = newArr.map(el => el * 2);
    return doubled.reverse()
    
}

solve([10, 15, 20, 25])