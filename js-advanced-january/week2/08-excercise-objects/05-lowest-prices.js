function solve(arr) {
    let obj = {};
    for (let line of arr) {
        [town, product, price] = line.split(' | ');
        if (obj.hasOwnProperty(product)) {
            if (price < obj[product][0]) {
                obj[product] = [Number(price), town]
            }
            
        } else {
            obj[product] = [Number(price), town]
        }
    }
    for (let el in obj) {
        console.log(`${el} -> ${obj[el][0]} (${obj[el][1]})`);
    }
}

solve(['Sofia City | Audi | 100000',
'Sofia City | BMW | 100000',
'Sofia City | Mitsubishi | 10000',
'Sofia City | Mercedes | 10000',
'Sofia City | NoOffenseToCarLovers | 0',
'Mexico City | Audi | 1000',
'Mexico City | BMW | 99999',
'Mexico City | Mitsubishi | 10000',
'New York City | Mitsubishi | 1000',
'Washington City | Mercedes | 1000']
)
solve(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
)