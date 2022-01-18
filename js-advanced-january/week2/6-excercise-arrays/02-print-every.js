function solve(arr, num) {
    let newArr = [];
    for (let i = 0; i < arr.length; i += num) {
        newArr.push(arr[i]);
    }
    return newArr;
}

solve(['dsa',
'asd', 
'test', 
'tset'], 
2

)