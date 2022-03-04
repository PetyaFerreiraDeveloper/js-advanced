function sum(arr) {
    let sum = 0;
    for (let num of arr){
        sum += Number(num);
    }
    console.log(sum);
    return sum;
}

sum([])

module.exports = sum;

