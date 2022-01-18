function solve(arr, num) {
    for (let i = 0; i < num; i++) {
        let removed = arr.pop();
        arr.unshift(removed)
    }
    console.log(arr.join(' '));
}

solve(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15

)