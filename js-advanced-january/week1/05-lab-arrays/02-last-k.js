function solve(n, k) {
    let newArr = [1];
    
    for (let i = 0; i < n - 1; i++) {
        let sum = 0;
        let lastElementIndex = newArr.length - 1;
        if ( lastElementIndex < k) {
            sum = newArr.reduce((acc, num) => {
                return acc + num
            }, 0)
            newArr.push(sum);
        } else {
            for (let j = 0; j < k; j++) {

                sum += newArr[lastElementIndex - j];
            }
            newArr.push(sum)
        }
    }
    return newArr;
}

let result = solve(8, 2);
console.log(result);