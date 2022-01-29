function solve(arr) {
    let sorted = arr.sort((a, b) => a.localeCompare(b));
    let firstChar = '';
    for (let line of sorted) {
        let [name, price] = line.split(' : ');
        if (line[0] != firstChar) {
            firstChar = line[0];
            console.log(firstChar);
        }
        console.log(`  ${name}: ${Number(price)}`);
    }
}

solve(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
)