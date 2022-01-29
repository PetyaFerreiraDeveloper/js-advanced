function solve(arr, str1, str2) {
    let indexOfStr1 = arr.indexOf(str1);
    let indexOfStr2 = arr.indexOf(str2);
    let newArr = arr.slice(indexOfStr1, indexOfStr2 + 1);
    return newArr;
    
}

solve(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'

)