function solve(arr) {
    let num = 0;
    let newArr = [];
    for (let el of arr) {
        num++;

        if (el === 'add') {
            newArr.push(num);
        } else if ( el === 'remove') {
            newArr.pop();
        }
    }
    if (newArr.length === 0) {
        console.log('Empty');
    } else {
        newArr.forEach(el => console.log(el));
    }
}

solve(['add', 
'add', 
'remove', 
'add', 
'add']



)